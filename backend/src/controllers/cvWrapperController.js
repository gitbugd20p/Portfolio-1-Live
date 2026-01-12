const CVWrapper = require("../models/cvWrapperModel");

// Get CV Wrapper (Usually single document)
exports.getCVWrapper = async (req, res) => {
    try {
        const data = await CVWrapper.find();

        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.toString(),
            message: "Failed to fetch CV wrapper data.",
        });
    }
};
