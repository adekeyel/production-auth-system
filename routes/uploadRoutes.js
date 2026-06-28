const express = require("express");
const upload = require("../middleware/uploadMiddleware");
const { protect } = require("../middleware/authMiddleware");
const { uploadProfileImage } = require("../controllers/uploadController");

const router = express.Router();

router.post(
  "/profile-image",
  protect,
  upload.single("image"),
  uploadProfileImage
);

module.exports = router;