const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("../../../config");
const validator = require("validator");

const { Schema, model } = mongoose;

const UserSchema = new Schema(
  {
    authId: {
      type: mongoose.Schema.ObjectId,
      required: true,
      ref: "Auth",
    }, 
    user_name: {
      type: String,
      unique: true,
      sparse: true,
    }, 
    name: {
      type: String,
      required: true,
    }, 
    email: {
      type: String,
      required: true,
    },
    profile_image: {
      type: String,
      default:
        "https://res.cloudinary.com/arafatleo/image/upload/v1720600946/images_1_dz5srb.png",
    }, 
    cover_image:{
      type: String,
      default:
        "https://res.cloudinary.com/arafatleo/image/upload/v1720600946/images_1_dz5srb.png",
    },
    phone_number: {
      type: String,
      unique: true,
    }, 
    address: {
      type: String,
    }, 
    gender: {
      type: String, 
    },
    age: {
      type: String,
    }, 
    location: {
      type: String,
    },
    date_of_birth: {
      type: Date,
    },   
    amount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
); 

// Model
const User = model("User", UserSchema);

module.exports = User;
