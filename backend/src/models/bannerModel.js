const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema(
    {
        header: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Banner = mongoose.model("banner", bannerSchema);

module.exports = Banner;
