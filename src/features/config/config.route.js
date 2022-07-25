import express from 'express'
const router = express.Router()
import ConfigController from './config.controller'

router.get('/import-data', ConfigController.importData)
router.get('/destroy-data', ConfigController.destroyData)

export default router