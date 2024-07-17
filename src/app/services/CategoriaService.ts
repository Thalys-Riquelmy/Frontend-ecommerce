import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environment/environment';
import { Observable } from 'rxjs';
import { Categoria } from '../models/Categoria';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  private apiUrl = environment.apiUrl;
  private categoriaEndpoint = environment.endpoints.categorias;

  constructor(private http: HttpClient) { }

  listarCategorias(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(`${this.apiUrl}${this.categoriaEndpoint}`);
  }

  obterCategoriaPorId(id: number): Observable<Categoria> {
    return this.http.get<Categoria>(`${this.apiUrl}${this.categoriaEndpoint}/${id}`);
  }

  criarCategoria(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(`${this.apiUrl}${this.categoriaEndpoint}`, categoria);
  }

  atualizarCategoria(id: number, categoriaAtualizada: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(`${this.apiUrl}${this.categoriaEndpoint}/${id}`, categoriaAtualizada);
  }

  deletarCategoria(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}${this.categoriaEndpoint}/${id}`);
  }
}
