// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Categoria from 'App/Models/Categoria'

export default class CategoriasController {
  public async adicionarCategoria({ request }) {
    try {
      const { nome } = request.all()
      const novaCategoria = new Categoria()
      novaCategoria.nome = nome
      novaCategoria.save()
      return novaCategoria
    } catch (error) {
      console.log(error)
      return error
    }
  }
  public async listarCategorias() {
    try {
      const categorias = await Categoria.all()
      return categorias
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
