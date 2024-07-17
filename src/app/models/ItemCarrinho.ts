import { Produto } from './Produto';
import { Carrinho } from './Carrinho';

export interface ItemCarrinho {
  id?: number;
  produto: Produto;
  carrinho: Carrinho;
  quantidade: number;
  precoUnitario: number;
  precoTotal?: number; // Este campo pode ser calculado no backend ou no frontend, dependendo da lógica aplicada
}
