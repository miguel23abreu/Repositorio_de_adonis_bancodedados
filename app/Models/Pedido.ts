import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Pedido extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public vendedor_id: number

  @column()
  public cliente_id: number

  @column()
  public data: Date

  @column()
  public numeroPedido: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
