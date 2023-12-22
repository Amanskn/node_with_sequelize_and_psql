const { User } = require("./../models/user.model");

const createUser = async (req, res) => {
  try {
    // console.log("Inside try of createUser");
    const aman = await User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
    });
    // console.log("@@@@ this is aman:-", aman.dataValues === aman.toJSON()); // Don't do this
    // console.log("@@@@ this is aman.toJSON:-", aman.toJSON()); // This is good!
    // console.log(
    //   "@@@@ this is aman.JSON.stringify():-",
    //   typeof JSON.stringify(aman, null, 4)
    // );
    res.status(201).json({
      status: "success",
      msg: "user created successfully",
    });
  } catch (error) {
    console.log("@@Error inside user.controller", error.message);
    process.exit(1);
  }
};

const getUsers = async (req, res) => {
  try {
    // console.log("Inside try of getUsers");
    res.status(200).json({
      status: "success",
      data: "All users",
    });
  } catch (error) {
    console.log("@@Error inside user.controller", error.message);
    process.exit(1);
  }
};

module.exports = {
  createUser,
  getUsers,
};
