import User from '@/features/user/user.model'
import users from '../../fake-data/user'

class ConfigService {
  async importData() {
    try {
      const userList = await User.insertMany(users)
      return userList
    } catch (error) {
      throw error
    }
  }

  async destroyData() {
    try {
      const userList = await User.deleteMany()
      return userList
    } catch (error) {
      throw error
    }
  }
}

export default new ConfigService()
