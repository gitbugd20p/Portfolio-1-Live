const mongoose = require("mongoose");

const projectsSchema = new mongoose.Schema(
    {
        category: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        liveLink: {
            type: String,
            required: true,
        },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Projects = mongoose.model("projects", projectsSchema);

module.exports = Projects;
