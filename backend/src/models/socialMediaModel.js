const mongoose = require("mongoose");

const socialMediaSchema = new mongoose.Schema(
    {
        platform: {
            type: String,
            required: true,
            trim: true,
        },
        icon: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const SocialMedia = mongoose.model("social_media", socialMediaSchema);

module.exports = SocialMedia;
