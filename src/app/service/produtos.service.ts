import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produto } from '../produtos/produto';
import { Observable } from 'rxjs';
import { API_CONFIG } from '../config/api.config';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) {
   }
   
  salvarProduto(produto: Produto): Observable<Produto>{
   return this.http.post<Produto>(`${API_CONFIG.baseUrl}produtos/insert`, produto);
  }

  listarProdutoPorData(nomeCliente: String, codProduto: String, dia: number, mes: number, ano: number): Observable<any>{
    const params= new HttpParams().set('nomeCliente', nomeCliente.toString()).set('codProduto', codProduto.toString()).set('dia', dia.toString()).set('mes', mes.toString()).set('ano', ano.toString());
    return this.http.get<any>(`${API_CONFIG.baseUrl}produtos/listaPorProduto`,{params});
   }

   listarProdutoPorNomeCod(nomeCliente: String, codProduto: String){
    const params= new HttpParams().set('nomeCliente', nomeCliente.toString()).set('codProduto', codProduto.toString());
    return this.http.get<any>(`${API_CONFIG.baseUrl}produtos/listaPorProdutoCod`,{params});
   }

   listarProdutoPorNome(nomeCliente: String){
    const params= new HttpParams().set('nomeCliente', nomeCliente.toString());
    return this.http.get<any>(`${API_CONFIG.baseUrl}produtos/listaPorProdutoNomeCliente`,{params});
   }
}
