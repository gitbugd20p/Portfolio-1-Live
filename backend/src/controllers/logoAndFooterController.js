const LogoAndFooter = require("../models/logoAndFooterModel");

// Get Logo & Footer
exports.getLogoAndFooter = async (req, res) => {
    try {
        const data = await LogoAndFooter.findOne();

        res.status(200).json({
            success: true,
            data,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.toString(),
        });
    }
};
