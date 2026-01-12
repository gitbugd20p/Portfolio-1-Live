const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
    {
        yearFrom: {
            type: String,
            required: true,
        },
        yearTo: {
            type: String,
            required: true,
        },
        degree: {
            type: String,
            required: true,
        },
        institutionAndDtls: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Education = mongoose.model("education", educationSchema);

module.exports = Education;
