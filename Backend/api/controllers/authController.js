import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    // bcrypt is used to encrpyt passwords and both these salt and hash are given in documentation
    // with bcrypt we wont be able to see passwords even in the database we will see a hash password instead
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      ...req.body,
      password: hash,
    });

    await newUser.save();
    res.status(200).send("User has been created.");
  } catch (err) {
    next(err);
  }
};
export const login = async (req, res, next) => {
  try {
    //we will try to find the entered username find one because we are finding one
    const user = await User.findOne({ username: req.body.username });
    // if no username then return error
    if (!user) return next(createError(404, "User not found!"));
    // to check passwords we will again use bcrypt since in our db password is stored as hash but password is entered as a string
    
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.JWT
    );

    // we dont want to send the password while showing the details
    const { password, isAdmin, ...otherDetails } = user._doc;//user object is inside user_doc
    res.cookie("access_token", token, {
        httpOnly: true,
      })
    res.status(200)
    res.json({ details: { ...otherDetails }, isAdmin });
  } catch (err) {
    next(err);
  }
};