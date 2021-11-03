const fs = require('fs');
const Joi = require('joi')
const {v1: uuidv1} = require('uuid')
const mongoose = require('mongoose')
const firebase = require('./firebase')
const Logs = require('../models/logs')
const Users = require('../models/users')
const Roles = require('../models/roles')
const Notifications = require('../models/notifications')
const UserNotifications = require('../models/usersnotifications')
const News = require('../models/news')
const orderBy = require('../helpers/orderBy')
const response = require('../helpers/response')
const createJWT = require('../helpers/createJWT')
const UsersRoles = require('../models/usersroles')
const CustomError = require('../classes/CustomError')
const queryFilters = require('../helpers/queryFilters')
const { OAuth2Client } = require("google-auth-library")
const validateSchema = require('../helpers/validateSchema')
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args))
const ObjectId = require('mongoose').Types.ObjectId; 



module.exports = {
  fs,
  Joi,
  uuidv1,
  mongoose,
  firebase,
  Logs,
  Users,
  Roles,
  Notifications,
  UserNotifications,
  News,
  orderBy,
  response,
  createJWT,
  UsersRoles,
  CustomError,
  queryFilters,
  OAuth2Client,
  validateSchema,
  fetch,
  ObjectId
}

