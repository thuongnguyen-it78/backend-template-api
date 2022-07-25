import { OK } from '@/constants/http-code.constant'
import { getSingleResponse } from '@/constants/response.constant'
import ConfigService from './config.service'

class ConfigController {
  async importData(req, res, next) {
    try {
      const data = await ConfigService.importData(req.body)
      return res.status(OK).json(getSingleResponse(data))
    } catch (error) {
      next(error)
    }
  }

  async destroyData(req, res, next) {
    try {
      const data = await ConfigService.destroyData(req.body)
      return res.status(OK).json(getSingleResponse(data))
    } catch (error) {
      next(error)
    }
  }
}

export default new ConfigController()
