const nodemailer = require('nodemailer');
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kirantirmale2362001@gmail.com',
        pass: 'lpeoxqpvvgwavblf'
    }
});

const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: "User already exists, you can login.", success: false });
        }

        const userModel = new User({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10);
        await userModel.save();

        // Send email to the user indicating successful signup
        const mailOptions = {
            from: 'kirantirmale2362001@gmail.com',
            to: email,
            subject: 'Successful Signup on Our Website',
            html: `<h1>Welcome ${name}!</h1><p>You have successfully signed up to our website. Thank you for joining!</p>`,
            attachments: [{
                filename: 'form.html',
                path: './form.html',
            }]
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log("Error sending email:", error);
                return res.status(500).json({
                    message: "Failed to send email",
                    success: false
                });
            } else {
                console.log("Email sent: " + info.response);
            }
        });

        res.status(201)
            .json({
                message: "Signup successful, a confirmation email has been sent.",
                success: true
            });
    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
        });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Request received:", { email, password });

        const user = await User.findOne({ email });
        const errMsg = "Auth failed: email or password is incorrect";

        if (!user) {
            console.log("User not found:", email);
            return res.status(403).json({ message: errMsg, success: false });
        }

        const isPassEqual = await bcrypt.compare(password, user.password);
        if (!isPassEqual) {
            console.log("Password mismatch for user:", email);
            return res.status(403).json({ message: errMsg, success: false });
        }
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is undefined");
            return res.status(500).json({
                message: "Server misconfiguration: JWT_SECRET is missing",
                success: false
            });
        }
        // if (!process.env.JWT_SECRET) {
        //     console.error("JWT_SECRET is undefined");
        //     return res.status(500).json({ message: "Server misconfiguration", success: false });
        // }
        console.log("JWT_SECRET:", process.env.JWT_SECRET);

        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login successful",
            success: true,
            jwtToken,
            email,
            name: user.name
        });
    } catch (error) {
        console.error("Login error:", error.message, error.stack);
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false
        });
    }
};


module.exports = {
    signup,
    login
}