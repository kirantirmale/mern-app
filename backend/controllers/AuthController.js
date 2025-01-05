
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "kirantirmale2362001@gmail.com",
        pass: "lidb gion tcly dubu"
    }
});

const signup = async (req, res) => {
    try {
        const { firstname, lastname, email, password } = req.body;

        const userModel = new User({
            firstname,
            lastname,
            email,
            password: await bcrypt.hash(password, 10),
        });

        await userModel.save();

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userModel.email,
            subject: 'Profile Successfully Created on Kiran Tirmale Portfolio',
            text: `Dear ${userModel.firstname.toUpperCase()},\n\nYour profile has been successfully created on https://mern-app-ui-kirantirmales-projects.vercel.app/login\n\nNow you can login on the above link with the help of your reference ID.\n\nYour reference ID is: ${userModel.email}\n\nThank you,\nKiran Tirmale`
        };
        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
        });
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409).json({ message: 'User already exists', success: false });
        }

        res.status(201).json({ message: 'Signup successful', success: true });
    } catch (error) {
        res.status(500).json({ message: error.message || 'Internal Server Error', success: false });
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
        if (!process.env.JWT_SECRET) {
            console.error("JWT_SECRET is undefined");
            return res.status(500).json({ message: "Server misconfiguration", success: false });
        }
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
            firstname: user.firstname,
            lastname: user.lastname,
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