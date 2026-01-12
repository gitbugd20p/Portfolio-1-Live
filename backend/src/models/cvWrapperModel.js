const mongoose = require("mongoose");

const cvWrapperSchema = new mongoose.Schema(
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

const CVWrapper = mongoose.model("cv_wrapper", cvWrapperSchema);

module.exports = CVWrapper;
