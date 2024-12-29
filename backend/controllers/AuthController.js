// require('dotenv').config(); // Ensure this is at the top of your entry file
const User = require("../models/User");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            return res.status(409)
                .json({ message: "User is already exist, you can login  ", success: false });
        }
        const userModel = new User({ name, email, password });
        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save();
        res.status(201)
            .json({
                message: "Signup successfully ", success: true
            })
    } catch (error) {
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
        });
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Request received:", { email, password }); // Debug input
        
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
        console.error("Login error:", error); // Log detailed error
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        });
    }
};


module.exports = {
    signup,
    login
}