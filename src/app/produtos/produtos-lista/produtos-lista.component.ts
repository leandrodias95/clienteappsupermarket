import {Component } from '@angular/core';
import { faSearch, faRotateRight, faPlus } from '@fortawesome/free-solid-svg-icons';
import { Produto } from '../produto';
import { Cliente } from 'src/app/clientes/cliente';
import { ProdutosService } from 'src/app/service/produtos.service';



@Component({
  selector: 'app-produtos-lista',
  templateUrl: './produtos-lista.component.html',
  styleUrls: ['./produtos-lista.component.css']
})
export class ProdutosListaComponent{
  tipoPesquisa: String = "";
  faSearch = faSearch;
  faRotateRight = faRotateRight;
  faPlus = faPlus;
  produtos: Produto[] = [];
  mostrarResultado: boolean = false;
  cliente: Cliente;
  nomeCliente: String = "";
  codProduto: String = "";
  dataCompra: Date = new Date();
  errors: String[]=[];
  constructor(private produtoService: ProdutosService) {
    this.cliente = new Cliente();

  }

  buscarCompra() {
    if (this.tipoPesquisa == "1") {
      const dia = new Date(this.dataCompra).getDate() + 1;
      const mes = new Date(this.dataCompra).getMonth() + 1;
      const ano = new Date(this.dataCompra).getFullYear();
      this.produtoService.listarProdutoPorData(this.nomeCliente, this.codProduto, dia, mes, ano).subscribe(response => {
        this.produtos = response;
        
      }, errorResponse=>{
        this.errors= errorResponse.error.errors;
      });
    }

    else if (this.tipoPesquisa == "2") {
      this.produtoService.listarProdutoPorNomeCod(this.nomeCliente, this.codProduto).subscribe(response => {
        this.produtos = response;
      }, errorResponse=>{
        this.errors= errorResponse.error.errors;
      });
    }
    else {
      this.produtoService.listarProdutoPorNome(this.nomeCliente).subscribe(response => {
        this.produtos = response;
      }, errorResponse=>{
        this.errors= errorResponse.error.errors;
      });
     
    }
    this.mostrarResultado = true;
    this.resetarFormulario();
  }

  resetarFormulario() {
    const formularioElement = document.getElementById('formBusca') as HTMLFormElement;

    if (formularioElement) {
      formularioElement.reset();
    }
  }
}

