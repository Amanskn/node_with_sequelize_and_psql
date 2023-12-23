const { User } = require("./../../models/user.model");

// ========================This is the controller action to fetch a particular user from the database
module.exports.getAUser = async (req, res) => {
  try {
    // console.log("Inside try of getUsers")
    const userId = req.params.id;
    // const requiredUser = await User.findByPk(userId);
    const requiredUser = await User.findOne({
      where: {
        id: userId,
      },
    });
    if (requiredUser) {
      res.status(200).json({
        status: "success",
        data: requiredUser,
      });
    } else {
      res.status(404).json({
        status: "error",
        msg: "No User found with the provided id",
      });
    }
  } catch (error) {
    console.log("@@Error inside user.controller", error.message);
    process.exit(1);
  }
};
