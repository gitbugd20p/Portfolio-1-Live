const Education = require("../models/educationModel");

// Get All Education
exports.getAllEducations = async (req, res) => {
    try {
        const educations = await Education.find();
        res.status(200).json({
            success: true,
            data: educations,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.toString(),
            message: "Failed to fetch education list.",
        });
    }
};
