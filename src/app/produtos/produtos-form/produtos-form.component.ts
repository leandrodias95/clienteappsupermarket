import { Component, ElementRef, ViewChild } from '@angular/core';
import { faArrowAltCircleLeft, faSave, faRotateRight } from '@fortawesome/free-solid-svg-icons';
import { Produto } from '../produto';
import { ProdutosService } from 'src/app/service/produtos.service';


@Component({
  selector: 'app-produtos-form',
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.css']
})

export class ProdutosFormComponent {
  faSave= faSave;
  faArrowAltCircleLeft= faArrowAltCircleLeft;
  faRotateRight= faRotateRight;
  produto: Produto;
  condicaoCliente: boolean= false;


  @ViewChild('pcodProdutoInput') pcodProdutoInput: any; 
  @ViewChild('pProdutoInput') pProdutoInput: any; 
  @ViewChild('pdescricaoInput') pdescricaoInput: any; 
  @ViewChild('pvalorInput') pvalorInput: any; 

  constructor(private produtosService:ProdutosService ){
    this.produto = new Produto();
    
  }

  onSubmit() {
    this.produtosService.salvarProduto(this.produto).subscribe(response => {
      this.produto = response;
      this.condicaoCliente = true;
    });
      this.pcodProdutoInput.nativeElement.value = '';
      this.pProdutoInput.nativeElement.value = '';
      this.pdescricaoInput.nativeElement.value = '';
      this.produto.valor.toString();
      this.pvalorInput.nativeElement.value = '';
  }

  novo(){
    window.location.reload();
  }
  
}
