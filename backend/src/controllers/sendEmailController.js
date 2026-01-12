const send_Emails = require("../models/sendEmailModel");

// Create Email
exports.createSendEmail = async (req, res) => {
    try {
        const { name, email, location, budget, subject, message } = req.body;

        if (!name || !email || !subject || !message) {
            return res.status(400).json({
                success: false,
                message: "Please provide all required fields.",
            });
        }

        const result = await send_Emails.create({
            name,
            email,
            location,
            budget,
            subject,
            message,
        });

        res.status(201).json({
            success: true,
            message: "Email sent successfully.",
            data: result,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.toString(),
        });
    }
};
