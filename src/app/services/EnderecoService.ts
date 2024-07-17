import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Endereco } from '../models/Endereco';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  private apiUrl = environment.apiUrl;
  private enderecoEndpoint = environment.endpoints.enderecos;

  constructor(private http: HttpClient) { }

  listarEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(`${this.apiUrl}${this.enderecoEndpoint}`);
  }

  obterEnderecoPorId(id: number): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.apiUrl}${this.enderecoEndpoint}/${id}`);
  }

  criarEndereco(endereco: Endereco): Observable<Endereco> {
    return this.http.post<Endereco>(`${this.apiUrl}${this.enderecoEndpoint}`, endereco);
  }

  atualizarEndereco(id: number, endereco: Endereco): Observable<Endereco> {
    return this.http.put<Endereco>(`${this.apiUrl}${this.enderecoEndpoint}/${id}`, endereco);
  }

  deletarEndereco(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.enderecoEndpoint}/${id}`);
  }
}
