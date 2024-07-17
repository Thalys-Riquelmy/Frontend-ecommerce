import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  private apiUrl = environment.apiUrl;
  private produtoEndpoint = environment.endpoints.produtos;

  constructor(private http: HttpClient) { }

  listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(`${this.apiUrl}${this.produtoEndpoint}`);
  }

  obterProdutoPorId(id: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.apiUrl}${this.produtoEndpoint}/${id}`);
  }

  criarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(`${this.apiUrl}${this.produtoEndpoint}`, produto);
  }

  atualizarProduto(id: number, produtoAtualizado: Produto): Observable<Produto> {
    return this.http.put<Produto>(`${this.apiUrl}${this.produtoEndpoint}/${id}`, produtoAtualizado);
  }

  deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.produtoEndpoint}/${id}`);
  }
}
