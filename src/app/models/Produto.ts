import { Categoria } from "./Categoria";

export interface Produto {
  id: number;
  sku: string;
  nome: string;
  descricao: string;
  categoria: Categoria;
  subCategoria: Categoria;
  precoAtacado: number;
  precoVarejo: number;
  precoPromocional?: number;
  quantidadeEstoque: number;
  marca?: string;
  modelo?: string;
  peso: number;  // em kg
  dimensoes?: string;  // "30x20x10 cm"
  cor?: string;
  corSecundaria?: string;
  material?: string;
  dataDeCadastro?: string;  // ou Date, dependendo de como você lida com datas
  status?: string;
  imagens?: string[];  // URLs das imagens
  metaTitulo?: string;
  metaDescricao?: string;
  metaKeywords?: string;
  origem?: string;
  fabricante?: string;
  avaliacaoMedia: number;
  numeroDeAvaliacoes: number;
  emPromocao: boolean;
  dataInicioPromocao?: string;  // ou Date
  dataFimPromocao?: string;  // ou Date
}

