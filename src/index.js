// configure
require('dotenv').config()

import express from 'express'
import helmet from 'helmet'
import cors from 'cors'
import createError from 'http-errors'
import compression from 'compression'

import routes from './routes'
import connectDatabase from './configs/database.config.js'
import { failedResponse } from './constants/response.constant.js'
import { PORT } from './constants/env.constant.js'
import { INTERNAL_SERVER } from './constants/http-code.constant'

const app = express()

// enabling CORS for all requests
app.use(cors())

// using bodyParser to parse JSON bodies into JS objects
app.use(express.json())

// adding Helmet to enhance your API's security
app.use(helmet())
app.use(express.urlencoded({ extended: true }))

// connect to mongodb
connectDatabase()

app.use(compression())

// verify user
// app.use(AuthMiddleware.verifyUser)

// route
routes(app)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError.NotFound())
})

// handle error
app.use((err, req, res, next) => {
  res.status(err.status || INTERNAL_SERVER).json({
    ...failedResponse,
    code: err.status,
    message: err.message,
  })
})

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`))

// unit test: don't need database
// integration test: need database
