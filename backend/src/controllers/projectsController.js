const Projects = require("../models/projectsModel");

// Get all projects
exports.getAllProjects = async (req, res) => {
    try {
        const projects = await Projects.find();
        res.status(200).json({
            success: true,
            data: projects,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.toString(),
            message: "An error occurred while fetching projects.",
        });
    }
};
