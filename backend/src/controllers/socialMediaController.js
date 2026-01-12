const SocialMedia = require("../models/socialMediaModel");

// Get all social media
exports.getAllSocialMedia = async (req, res) => {
    try {
        const data = await SocialMedia.find();
        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.toString(),
            message: "An error occurred while fetching social media.",
        });
    }
};
