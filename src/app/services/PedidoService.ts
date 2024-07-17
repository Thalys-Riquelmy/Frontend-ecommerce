import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environment/environment';
import { Pedido } from '../models/Pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  private apiUrl = environment.apiUrl;
  private pedidoEndpoint = environment.endpoints.pedidos;

  constructor(private http: HttpClient) { }

  listarPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.apiUrl}${this.pedidoEndpoint}`);
  }

  obterPedidoPorId(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.apiUrl}${this.pedidoEndpoint}/${id}`);
  }

  criarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(`${this.apiUrl}${this.pedidoEndpoint}`, pedido);
  }

  atualizarPedido(id: number, pedidoAtualizado: Pedido): Observable<Pedido> {
    return this.http.put<Pedido>(`${this.apiUrl}${this.pedidoEndpoint}/${id}`, pedidoAtualizado);
  }

  deletarPedido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.pedidoEndpoint}/${id}`);
  }
}
