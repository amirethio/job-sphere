import userModel from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const registerService = async (data) => {
  try {
    if (
      (data.email == "") |
      ((data.password == "") | (data.first_name == ""))
    ) {
      return {
        status: 401,
        message: "All fields are required",
      };
    }
    const saltRounds = 10;
    const hash = bcrypt.hashSync(data.password, saltRounds);
    const user = new userModel({
      first_name: data.first_name,
      last_name: data.last_name,
      email: data.email,
      password: hash,
    });
    await user.save();
    return {
      status: 201,
      message: "register sucessfully",
    };
  } catch (error) {
    if (error.code == 11000) {
      return {
        status: 401,
        message: "user already found",
      };
    } else {
      console.log(error);

      return {
        status: 501,
        message: "something went wrong",
      };
    }
  }
};

export const loginService = async (data) => {
  try {
    if ((data.email == "") | (data.password == "")) {
      return {
        status: 401,
        message: "email and password are required",
      };
    }
    // check email
    const user = await userModel.findOne({ email: data.email });
    if (user == null) {
      return {
        status: 401,
        message: "user exist login to continue",
      };
    }
    const hash = user.password;
    const result = await bcrypt.compare(data.password, hash);
    if (!result) {
      return {
        status: 401,
        message: "wrong email and password",
      };
    }

    const jwtKey = jwt.sign(
      { name: user.first_name, email: user.email },
      process.env.JWT_KEY,
    );
    return {
      status: 201,
      message: "register sucessfully",
      token: jwtKey,
    };
  } catch (error) {
    console.log(error);
    return {
      status: 501,
      message: "something went wrong",
    };
  }
};
