const dbConnect = require("../lib/dbConnect");
const Banner = require("../models/bannerModel");

// Get All Banners
exports.getAllBanners = async (req, res) => {
    await dbConnect();
    try {
        const banners = await Banner.find();
        res.status(200).json({
            success: true,
            data: banners,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.toString(),
            message: "An error occurred while fetching banners.",
        });
    }
};
