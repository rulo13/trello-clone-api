'use strict'
const User = use('App/Models/User')

class UserController {

  async index({request, auth}) {
    return {users: await User.all(), currentUser: await auth.getUser()}
  }

  show() {
    return User.find()
  }

  async login ({request, auth}) {
    const { email, password } = request.all()
    return auth.attempt(email, password)
  }

  async currentUser ({auth}) {
    return await auth.getUser()
  }

  async store({request}) {
    const userData = request.all()
    const user = User.create(userData)
    return user;
  }

  async destroy({params}) {
    const user = await User.find(params['id'])
    await user.delete()
    return user;
  }
}

module.exports = UserController
