import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apiUrl = environment.apiUrl;
  private usuarioEndpoint = environment.endpoints.usuarios;

  constructor(private http: HttpClient) { }

  listarUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(`${this.apiUrl}${this.usuarioEndpoint}`);
  }

  obterUsuarioPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}${this.usuarioEndpoint}/${id}`);
  }

  criarUsuario(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}${this.usuarioEndpoint}`, usuario);
  }

  atualizarUsuario(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}${this.usuarioEndpoint}/${id}`, usuario);
  }

  deletarUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.usuarioEndpoint}/${id}`);
  }
}
