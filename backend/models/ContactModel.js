const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
     name: { type: String, required: false },
    email: { type: String, required: true},
    phone: { type: String, required: false },
    budget: { type: String, required: false },
    message: { type: String, required: false }
}, {
    timestamps: true, // automatically adds createdAt and updatedAt
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
