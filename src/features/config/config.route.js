import express from 'express'
const router = express.Router()
import ConfigController from './config.controller'

router.post('/import-data', ConfigController.importData)
router.post('/destroy-data', ConfigController.destroyData)

export default router