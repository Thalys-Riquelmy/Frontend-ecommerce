import { Pedido } from './Pedido';

export interface Pagamento {
  id?: number;
  pedido: Pedido;
  metodoPagamento: string;
  status?: string;
  dataPagamento?: string;
  valor: number;
}
