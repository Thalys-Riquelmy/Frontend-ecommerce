import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { ItemCarrinho } from '../models/ItemCarrinho';

@Injectable({
  providedIn: 'root'
})
export class ItemCarrinhoService {

  private apiUrl = environment.apiUrl;
  private itemCarrinhoEndpoint = environment.endpoints.itemCarrinhos;

  constructor(private http: HttpClient) { }

  listarItemCarrinhos(): Observable<ItemCarrinho[]> {
    return this.http.get<ItemCarrinho[]>(`${this.apiUrl}${this.itemCarrinhoEndpoint}`);
  }

  obterItemCarrinhoPorId(id: number): Observable<ItemCarrinho> {
    return this.http.get<ItemCarrinho>(`${this.apiUrl}${this.itemCarrinhoEndpoint}/${id}`);
  }

  criarItemCarrinho(itemCarrinho: ItemCarrinho): Observable<ItemCarrinho> {
    return this.http.post<ItemCarrinho>(`${this.apiUrl}${this.itemCarrinhoEndpoint}`, itemCarrinho);
  }

  atualizarItemCarrinho(id: number, itemCarrinho: ItemCarrinho): Observable<ItemCarrinho> {
    return this.http.put<ItemCarrinho>(`${this.apiUrl}${this.itemCarrinhoEndpoint}/${id}`, itemCarrinho);
  }

  deletarItemCarrinho(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.itemCarrinhoEndpoint}/${id}`);
  }
}
