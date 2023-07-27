const uploadImage = require("../helpers/upload.helper");

const uploadController = async (req, res, next) => {
  try {
    const myFile = req.file;
    const imageUrl = await uploadImage.uploadImage(myFile);

    res.status(200).json({
      message: "Upload was successful",
      data: imageUrl,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = uploadController;
