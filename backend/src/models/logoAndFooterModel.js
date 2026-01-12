const mongoose = require("mongoose");

const logoAndFooterSchema = new mongoose.Schema(
    {
        logoImg: {
            type: String,
            required: true,
        },
        logoText: {
            type: String,
            required: true,
        },
        copyrightText: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

// collection name: logo_and_footer
const LogoAndFooter = mongoose.model("logo_and_footer", logoAndFooterSchema);

module.exports = LogoAndFooter;
