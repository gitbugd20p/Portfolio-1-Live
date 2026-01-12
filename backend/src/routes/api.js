const express = require("express");
const bannerController = require("../controllers/bannerController");
const cvWrapperController = require("../controllers/cvWrapperController");
const socialMediaController = require("../controllers/socialMediaController");
const projectsController = require("../controllers/projectsController");
const sendEmailController = require("../controllers/sendEmailController");
const logoAndFooterController = require("../controllers/logoAndFooterController");
const educationController = require("../controllers/educationController");

const router = express.Router();

// Sample route
router.get("/", (req, res) => {
    res.status(200).json({
        message: "Welcome to the Portfolio-1-Live API",
    });
});

//=> Banner routes
// All banner
router.get("/banner", bannerController.getAllBanners);

//=> CV-Wrapper routes
// Get all cv-wrapper
router.get("/cv-wrapper", cvWrapperController.getCVWrapper);

//=> Social Media routes
// Get all social media
router.get("/social-media", socialMediaController.getAllSocialMedia);

//=> Projects routes
// Get all projects
router.get("/projects", projectsController.getAllProjects);

//=> Email (Contact) routes
// User send emails
router.post("/create-send-email", sendEmailController.createSendEmail);

//=> Logo & Footer routes
// Get logo and footer details
router.get("/logo-footer", logoAndFooterController.getLogoAndFooter);

// Education routes
// Get All Education
router.get("/education", educationController.getAllEducations);

module.exports = router;
