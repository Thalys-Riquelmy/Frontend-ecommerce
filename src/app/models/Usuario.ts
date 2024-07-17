import { Endereco } from "./Endereco";
import { Pedido } from "./Pedido";

export interface Usuario {
  id?: number;
  nomeCompleto: string;
  email: string;
  senha: string;
  cpf: string;
  telefone?: string;
  receberEmail: boolean;
  permitirNotificacoes: boolean;
  dataCadastro: string; // ou LocalDate conforme necessário
  enderecosEntrega?: Endereco[];
  historicoCompras?: Pedido[];
}
