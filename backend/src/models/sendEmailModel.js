const mongoose = require("mongoose");

const sendEmailSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        location: {
            type: String,
        },
        budget: {
            type: String,
        },
        subject: {
            type: String,
            required: true,
        },
        message: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// 👇 collection name explicitly set
const SendEmail = mongoose.model("send_Emails", sendEmailSchema);

module.exports = SendEmail;
