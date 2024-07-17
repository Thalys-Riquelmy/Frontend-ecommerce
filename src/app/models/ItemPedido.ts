import { Produto } from './Produto';

export interface ItemPedido {
  id?: number;
  produto: Produto;
  quantidade: number;
  precoUnitario: number;
  precoTotal?: number;
}
