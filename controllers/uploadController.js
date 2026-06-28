const cloudinary = require("../config/cloudinary");
const User = require("../models/User");

const uploadProfileImage = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({
        message: "No file uploaded",
      });
    }

   console.log("Cloud name:", process.env.CLOUDINARY_CLOUD_NAME);
console.log("API Key exists:", !!process.env.CLOUDINARY_API_KEY);
console.log("API Secret exists:", !!process.env.CLOUDINARY_API_SECRET);

const imageString = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;

const result = await cloudinary.uploader.upload(imageString, {
  folder: "profile-images",
});

  const user = await User.findByIdAndUpdate(
  req.user.id,
  {
    profileImage: result.secure_url,
  },
  {
    new: true,
    select: "-password",
  }
);

    res.status(200).json({
      message: "Profile image uploaded successfully",
      imageUrl: result.secure_url,
      user,
    });
  }
  catch (error) {
  console.error("UPLOAD ERROR:");
  console.error(error);

  res.status(500).json({
    message: error.message,
  });
}
};

module.exports = {
  uploadProfileImage,
};