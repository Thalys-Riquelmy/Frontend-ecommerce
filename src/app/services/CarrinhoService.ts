import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Carrinho } from '../models/Carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

  private apiUrl = environment.apiUrl;
  private carrinhoEndpoint = environment.endpoints.carrinhos;

  constructor(private http: HttpClient) { }

  listarCarrinhos(): Observable<Carrinho[]> {
    return this.http.get<Carrinho[]>(`${this.apiUrl}${this.carrinhoEndpoint}`);
  }

  obterCarrinhoPorId(id: number): Observable<Carrinho> {
    return this.http.get<Carrinho>(`${this.apiUrl}${this.carrinhoEndpoint}/${id}`);
  }

  criarCarrinho(carrinho: Carrinho): Observable<Carrinho> {
    return this.http.post<Carrinho>(`${this.apiUrl}${this.carrinhoEndpoint}`, carrinho);
  }

  atualizarCarrinho(id: number, carrinho: Carrinho): Observable<Carrinho> {
    return this.http.put<Carrinho>(`${this.apiUrl}${this.carrinhoEndpoint}/${id}`, carrinho);
  }

  deletarCarrinho(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.carrinhoEndpoint}/${id}`);
  }
}
