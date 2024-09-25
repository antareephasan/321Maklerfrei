const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const config = require("../../../config");
const validator = require("validator");

const { Schema, model } = mongoose;

const AuthSchema = new Schema(
  {  
    name: {
      type: String, 
      required: true,
    }, 
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: {
        validator: (value) => validator.isEmail(value),
        message: "Please provide a valid email address",
      },
    }, 
    password: {
      type: String,
      required: [true, "Password is required"],
      select: false,
    }, 
    role: {
      type: String,
      enum: ["USER", "DRIVER", "ADMIN", "SUPER_ADMIN"],
      default: "USER",
    },   
    verifyCode: {
      type: String,
    },
    codeVerify:{
      type: Boolean,
      default: false,
    },
    activationCode: {
      type: String,
    },
    verifyExpire: {
      type: Date,
    },
    expirationTime: {
      type: Date,
      default: () => Date.now() + 2 * 60 * 1000,
    },
    is_block: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: false,
    }, 
  },
  {
    timestamps: true,
  }
);

// Check if Auth exists
AuthSchema.statics.isAuthExist = async function (email) {
  return await this.findOne(
    { email },
    {
      _id: 1,
      email: 1,
      password: 1,
      role: 1,
      // phone_number: 1,
    }
  );
};

// Check password match
AuthSchema.statics.isPasswordMatched = async function (
  givenPassword,
  savedPassword
) {
  return await bcrypt.compare(givenPassword, savedPassword);
};

// Hash the password
AuthSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = await bcrypt.hash(
    this.password,
    Number(config.bcrypt_salt_rounds)
  );
  next();
});

// Model
const Auth = model("Auth", AuthSchema);

module.exports = Auth;
