import { Usuario } from './Usuario';
import { ItemCarrinho } from './ItemCarrinho';

export interface Carrinho {
  id?: number;
  usuario: Usuario;
  itens: ItemCarrinho[];
  valorTotal: number;
}
