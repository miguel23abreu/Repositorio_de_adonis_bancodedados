// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import { Request } from '@adonisjs/core/build/standalone'
import Pessoa from 'App/Models/Pessoa'

export default class PessoasController {
  public async criarPessoa({ request }) {
    const { nome, cpf, endereco } = request.all()
    try {
      const novaPessoa = new Pessoa()
      ;(novaPessoa.nome = nome),
        (novaPessoa.cpf = cpf),
        (novaPessoa.endereco = endereco),
        novaPessoa.save()
      return novaPessoa
    } catch (error) {
      console.log(error)
      return error
    }
  }
  public async listarPessoas() {
    try {
      const pessoas = await Pessoa.all()
      return pessoas
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
