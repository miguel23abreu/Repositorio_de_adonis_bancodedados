// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Produto from 'App/Models/Produto'

export default class ProdutosController {
  public async criarProduto({ request }) {
    const { foto, nome, preco, vendedor_id, categoria_id } = request.all()
    try {
      const novoProduto = new Produto()
      novoProduto.foto = foto
      novoProduto.nome = nome
      novoProduto.preco = preco
      novoProduto.vendedor_id = vendedor_id
      novoProduto.categoria_id = categoria_id
      novoProduto.save()
      return novoProduto
    } catch (error) {
      console.log(error)
      return error
    }
  }
  public async listarProduto({ request }) {
    try {
      const Produtos = await Produto.all()
      return Produtos
    } catch (error) {
      console.log(error)
      return error
    }
  }
  public async listarProdutoPorCategoria({ request }) {
    const { categoria_id } = request.all()
    try {
      const Produtos = await Produto.findBy('categoria_id', categoria_id)
      return Produtos
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
