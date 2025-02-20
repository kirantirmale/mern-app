const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    name: { type: String, required: true }, // Combined firstName & lastName
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String, required: true },
    budget: { type: String, required: true }, // Added budget field
    country: { type: String, required: false }, // Keeping optional
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
