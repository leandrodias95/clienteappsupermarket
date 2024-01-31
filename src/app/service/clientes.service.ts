import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../clientes/cliente';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) {
   }
   salvar(cliente: Cliente):Observable<Cliente>{
   return this.http.post<Cliente>(`${API_CONFIG.baseUrl}clientes/insert`, cliente);
   }

   listarTodos():Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${API_CONFIG.baseUrl}clientes/listAll`);
    }

    listarPorId(id: number):Observable<any>{
      return this.http.get<any>(`${API_CONFIG.baseUrl}clientes/${id}`);
      }

      deletarCliente(id: number):Observable<any>{
        return this.http.delete<any>(`${API_CONFIG.baseUrl}clientes/${id}`);
        }
}
