import Database from "../Database/models";
import { saveToCloud } from "../helper/cloud";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const User = Database["Users"];
const HealthCentres = Database["HealthCentres"];

// Validate PIN
const isConsecutiveDigits = (pin) => {
    for (let i = 0; i < pin.length - 1; i++) {
      if (parseInt(pin[i]) === parseInt(pin[i + 1]) - 1) {
        return true;
      }
    }
    return false;
  };
  
  // Sign up
  export const createUser = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        pin,
        type,
        profile,
        HealthCentre,
      } = req.body;
  
      if (!firstName || !lastName || !email || !pin) {
        return res.status(400).json({
          status: "400",
          message: "All Fields Are Required",
        });
      }
  
      const verifyEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!verifyEmail.test(email)) {
        return res.status(400).json({
          status: "400",
          message: "Invalid Email format",
        });
      }
  
      const checkEmail = await User.findOne({ where: { email } });
      if (checkEmail) {
        return res.status(400).json({
          status: "400",
          message: "Email Used In Our Database",
        });
      }
  
      const pinRegex = /^\d{4}$/;
      if (!pinRegex.test(pin) || isConsecutiveDigits(pin)) {
        return res.status(400).json({
          status: "400",
          message: "Invalid PIN. It should be 4 digits and not consecutive.",
        });
      }
  
      let savedProfile;
      if (req.file) savedProfile = await saveToCloud(req.file, res);
  
      if (HealthCentre) {
        const findHealthCentreId = await HealthCentres.findOne({
          where: { id: req.body.HealthCentre },
        });
  
        if (!findHealthCentreId) {
          return res.status(404).json({
            status: "404",
            message: "HealthCentre not found",
          });
        }
      }
  
      const saltRounds = 10;
      const hashedPass = await bcrypt.hash(pin, saltRounds);
  
      const user = await User.create({
        firstName,
        lastName,
        email,
        pin: hashedPass,
        type,
        profile: savedProfile?.secure_url,
        HealthCentre,
      });
  
      return res.status(200).json({
        status: "200",
        message: "User Registered",
        data: user,
      });
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        console.error("Validation errors:", error.errors);
      } else {
        console.error("Unhandled error:", error);
      }
      return res.status(500).json({
        status: "500",
        message: "Failed to register",
        error: error.message,
      });
    }
  };
//Login to the system

export const userLogin = async (req, res) => {
  try {
    const userLogin = await User.findOne({ where: { email: req.body.email } });
    if (!userLogin) {
      return res.status(404).json({
        status: "404",
        message: "User Not Found",
      });
    }
    const isMatch = await bcrypt.compare(req.body.pin, userLogin.pin);
    if (!isMatch) {
      return res.status(404).json({
        status: "404",
        message: "Pin is Incorrect",
      });
    }
    const token = await Jwt.sign({ id: userLogin.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.EXPIREDTIME,
    });
    return res.status(200).json({
      status: "200",
      message: "User Login Succees",
      users: userLogin,
      token: token,
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      console.error("Validation errors:", error.errors);
    } else {
      console.error("Unhandled error:", error);
    }
    return res.status(500).json({
      status: "500",
      message: "Failed to login",
      error: error.message,
    });
    
  }
};

// Getting all users
export const getUsers = async (req, res) => {
    try {
      const users = await User.findAll({});
      return res.status(200).json({
        status: "200",
        message: "Users retrieved successfully",
        data: users,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
// Get a single user by ID
export const getSingleUser = async (req, res) => {
    try {
      const user = await User.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json({
          status: "404",
          message: "User not found",
        });
      }
  
      return res.status(200).json({
        status: "200",
        message:
          "A user with User ID:" +
          " " +
          req.params.id +
          " " +
          "retrieved successfully",
        data: user,
      });
    } catch (error) {
      if (error.name === "SequelizeValidationError") {
        console.error("Validation errors:", error.errors);
      } else {
        console.error("Unhandled error:", error);
      }
      return res.status(500).json({
        status: "500",
        message: "Failed to fetch data",
        error: error.message,
      });
      
    }
  };
// updating a user

export const updateUser = async (req, res) => {
  const { id } = req.params;
  try {
    const { firstName, lastName, email, role } = req.body;

    const user = await User.findByPk(req.params.id);
    if (!user) {
      return res.status(404).json({
        status: "404",
        message: "User not found",
      });
    }

    const updatedValues = { firstName, lastName, email, role };
    const userUpdate = await User.update(updatedValues, { where: { id: id } });

    return res.status(200).json({
      status: "200",
      message: "User updated successfully",
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      console.error("Validation errors:", error.errors);
    } else {
      console.error("Unhandled error:", error);
    }
    return res.status(500).json({
      status: "500",
      message: "Failed to update user",
      error: error.message,
    });
  }
};


// delete a user
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the user by ID
    const findUser = await User.findByPk(id);
    if (!findUser) {
      return res.status(404).json({
        status: "404",
        message: "User not found",
      });
    }
    const deletedUser = await User.destroy({ where: { id: id } });

    return res.status(200).json({
      status: "200",
      message:
        "User with user ID:with User ID:" +
        " " +
        req.params.id +
        " " +
        "deleted successfully",
      data: findUser,
    });
  } catch (error) {
    if (error.name === "SequelizeValidationError") {
      console.error("Validation errors:", error.errors);
    } else {
      console.error("Unhandled error:", error);
    }
    return res.status(500).json({
      status: "500",
      message: "Failed to delete data",
      error: error.message,
    });
    
  }
};