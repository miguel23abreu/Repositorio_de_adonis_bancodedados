// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Pedido from 'App/Models/Pedido'

export default class PedidosController {
  public async criarPedido({ request }) {
    const { vendedor_id, cliente_id, numeroPedido, data } = request.all()
    try {
      const novoPedido = new Pedido()
      novoPedido.vendedor_id = vendedor_id
      novoPedido.cliente_id = cliente_id
      novoPedido.numeroPedido = numeroPedido
      novoPedido.data = data
      novoPedido.save()
      return novoPedido
    } catch (error) {
      console.log(error)
      return error
    }
  }

  public async listarPedido() {
    try {
      const listarPedidos = await Pedido.all()
      return listarPedidos
    } catch (error) {
      console.log(error)
      return error
    }
  }
}
