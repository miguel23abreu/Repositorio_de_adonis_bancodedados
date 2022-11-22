// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import ItemPedido from 'App/Models/ItemPedido'

export default class ItemPedidosController {
  public async criarItemPedido({ request }) {
    const { pedido_id, produto_id } = request.all()
    try {
      const novoItemPedido = new ItemPedido()
      novoItemPedido.pedido_id = pedido_id
      novoItemPedido.produto_id = produto_id
      novoItemPedido.save()
      return novoItemPedido
    } catch (error) {
      console.log(error)
      return error
    }
  }

  public async listarItemPedido() {
    try {
      const ItemPedidos = await ItemPedido.all()
      return ItemPedidos
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
