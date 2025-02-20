const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    message: { type: String, required: true },
    country: { type: String, required: true },
}, {
    timestamps: true, // automatically adds createdAt and updatedAt
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
