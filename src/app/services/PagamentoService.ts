import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Pagamento } from '../models/Pagamento';

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {

  private apiUrl = environment.apiUrl;
  private pagamentoEndpoint = environment.endpoints.pagamentos;

  constructor(private http: HttpClient) { }

  listarPagamentos(): Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>(`${this.apiUrl}${this.pagamentoEndpoint}`);
  }

  obterPagamentoPorId(id: number): Observable<Pagamento> {
    return this.http.get<Pagamento>(`${this.apiUrl}${this.pagamentoEndpoint}/${id}`);
  }

  criarPagamento(pagamento: Pagamento): Observable<Pagamento> {
    return this.http.post<Pagamento>(`${this.apiUrl}${this.pagamentoEndpoint}`, pagamento);
  }

  atualizarPagamento(id: number, pagamento: Pagamento): Observable<Pagamento> {
    return this.http.put<Pagamento>(`${this.apiUrl}${this.pagamentoEndpoint}/${id}`, pagamento);
  }

  deletarPagamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.pagamentoEndpoint}/${id}`);
  }
}
