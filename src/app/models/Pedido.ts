import { Endereco } from "./Endereco";
import { Usuario } from "./Usuario";

export interface Pedido {
  id?: number;
  usuario: Usuario;
  dataPedido: string;
  status: string;
  itensPedido?: any[];
  valorTotal?: number;
  enderecoEntrega?: Endereco;
  observacoes?: string;
}
