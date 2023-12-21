
import  Jwt  from "jsonwebtoken";
import Database from "../Database/models";

const Users = Database["Users"]

// For operations made by only admin

export const admins = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) { 
      res.status(401).json({
        status: "401",
        message: "You are not logged in. Please, login",
      });
    }

    const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
    const loggedInUser = await Users.findByPk(decoded.id);
    console.log(loggedInUser);
    if (!loggedInUser) {
      res.status(403).json({
        status: "403",
        message: "Token has expired. Please, login again",
      });
    }

    if (loggedInUser.role !== "admin") {
      res.status(401).json({
        status: "401",
        message: "Only admin can do this operation",
      });
    } else {
      req.loggedInUser = loggedInUser;
      next();
    }

  } catch (error) {
    res.status(500).json({
      status: "500",
      error: error.message,
    });
  }
};

// Nurse autholisation

export const nurses = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      res.status(401).json({
        status: "401",
        message: "This operation requires you to login",
      });
    }

    const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
    const loggedInUser = await Users.findByPk(decoded.id);

    if (!loggedInUser) {
      res.status(403).json({
        status: "403",
        message: "Token has expired. Please, login again",
      });
    } if (loggedInUser.role !== "nurse") {
      res.status(401).json({
        status: "401",
        message: "Only nurse can do this operation",
      });
    } else {
      req.loggedInUser = loggedInUser;
      next();
    }

  } catch (error) {
    res.status(500).json({
      status: "500",
      error: error.message,
    });
  }
};

// Nurse autholisation

export const ideologist = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      res.status(401).json({
        status: "401",
        message: "This operation requires you to login",
      });
    }

    const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
    const loggedInUser = await Users.findByPk(decoded.id);

    if (!loggedInUser) {
      res.status(403).json({
        status: "403",
        message: "Token has expired. Please, login again",
      });
    } if (loggedInUser.role !== "ideologist") {
      res.status(401).json({
        status: "401",
        message: "Only nurse can do this operation",
      });
    } else {
      req.loggedInUser = loggedInUser;
      next();
    }

  } catch (error) {
    res.status(500).json({
      status: "500",
      error: error.message,
    });
  }
};

