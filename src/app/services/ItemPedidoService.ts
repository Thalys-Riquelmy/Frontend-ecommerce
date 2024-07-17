import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { ItemPedido } from '../models/ItemPedido';

@Injectable({
  providedIn: 'root'
})
export class ItemPedidoService {

  private apiUrl = environment.apiUrl;
  private itemPedidoEndpoint = environment.endpoints.itemPedidos;


  constructor(private http: HttpClient) { }

  listarItemPedidos(): Observable<ItemPedido[]> {
    return this.http.get<ItemPedido[]>(`${this.apiUrl}${this.itemPedidoEndpoint}`);
  }

  obterItemPedidoPorId(id: number): Observable<ItemPedido> {
    return this.http.get<ItemPedido>(`${this.apiUrl}${this.itemPedidoEndpoint}/${id}`);
  }

  criarItemPedido(itemPedido: ItemPedido): Observable<ItemPedido> {
    return this.http.post<ItemPedido>(`${this.apiUrl}${this.itemPedidoEndpoint}`, itemPedido);
  }

  atualizarItemPedido(id: number, itemPedidoAtualizado: ItemPedido): Observable<ItemPedido> {
    return this.http.put<ItemPedido>(`${this.apiUrl}${this.itemPedidoEndpoint}/${id}`, itemPedidoAtualizado);
  }

  deletarItemPedido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.itemPedidoEndpoint}/${id}`);
  }
}
