// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import { Exception, Request } from '@adonisjs/core/build/standalone'
import User from 'App/Models/User'

export default class UsersController {
  public async adicionarUser({ request }) {
    const { email, senha } = request.all()
    try {
      const rsEmail = await User.findBy('email', email)
      if (rsEmail) {
        throw new Exception('já existe um cadastro para o email!')
      }

      const user = new User()
      user.email = email
      user.password = senha
      user.save()
      return user
    } catch (error) {
      console.log(error)
    }
  }
}
