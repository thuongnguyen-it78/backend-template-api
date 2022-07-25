const mongoose = require('mongoose')
import {
  userInactive,
  userActive,
  userMale,
  userFemale,
  userRole,
  adminRole,
} from './user.constant'
import slug from 'mongoose-slug-generator'

const options = {
  separator: '-',
  lang: 'en',
  truncate: 120,
}

mongoose.plugin(slug, options)

import { checkIsEmail } from './user.validation'

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      trim: true,
      slug: 'fullName',
      slug_padding_size: 2,
      unique: true,
    },
    email: {
      type: String,
      validate: {
        validator: function (email) {
          return checkIsEmail(email)
        },
        message: (props) => `${props.value} is not a valid email`,
      },
      default: null,
      unique: true,
    },
    phoneNumber: {
      type: String,
      default: null,
    },
    googleId: {
      type: String,
      default: null,
    },
    facebookId: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      required: function () {
        return !(this.googleId || this.facebookId)
      },
      select: false,
    },
    avatarURL: {
      type: String,
      default: null,
    },
    dateOfBirth: {
      type: Date,
      default: null,
    },
    gender: {
      type: Number,
      enum: [userMale, userFemale],
      default: userMale,
    },
    address: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    tokenList: {
      type: Array,
      default: [],
      select: false,
    },
    role: {
      type: Number,
      enum: [userRole, adminRole],
      default: userRole,
    },
    status: {
      type: Number,
      enum: [userInactive, userActive],
      default: userInactive,
    },
    delete: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
)

export default mongoose.model('user', userSchema, 'user')
