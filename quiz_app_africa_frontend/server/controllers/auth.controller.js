import { User } from "../models/User.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
  // get the values from the html form. (email, username, password)
  const { username, email, password } = req.body;

  // hash the password before storing in the database.
  const hashedpassword = bcryptjs.hashSync(password, 10);

  // create new user using the model .
  const newUser = new User({ username, email, password: hashedpassword });
  try {
    // now save thenew user in the user model.
    await newUser.save();
    res.status(201).json({ message: "New User created successfully." });
  } catch (error) {
    next(error);
  }
};

// function to sign in
export const signin = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    // first check if the email is present or not .
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(404, "Invalid creadentials, User not found."));
    }
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(401, "Invalid Credentials"));
    }

    // if the email and password is correct. store the information in the cookie
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    // now after verifiying the email and password. separate the token
    const { password: hashedpassword, ...rest } = validUser._doc;
    const expiryDate = new Date(Date.now() + 3600000); // 1 hour
    // add this token to a cockie
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
