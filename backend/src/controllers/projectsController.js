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

// get project by id
exports.getProjectById = async (req, res) => {
    try {
        const project = await Projects.findById(req.params.id);

        if (!project) {
            return res.status(404).json({
                success: false,
                message: "Project not found.",
            });
        }

        res.status(200).json({
            success: true,
            data: project,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.toString(),
            message: "Failed to fetch project.",
        });
    }
};
