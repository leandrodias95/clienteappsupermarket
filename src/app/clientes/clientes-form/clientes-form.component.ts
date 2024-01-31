import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
import { faSave, faRotate, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { ClientesService } from 'src/app/service/clientes.service';
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {
  faSave= faSave;
  faRotate = faRotate;
  faArrowAltCircleLeft = faArrowAltCircleLeft;
  cliente: Cliente;
  success: boolean = false;
  errors: []= [];
  id!: number;
  
constructor(private clienteService: ClientesService, private activatedRoute: ActivatedRoute ){
  this.cliente = new Cliente();
}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(parametro=>{
      if(parametro && parametro['id']){
        this.id = parametro['id'];
        this.clienteService.listarPorId(this.id).subscribe(response=>{this.cliente=response},errorResponse=>{
          this.cliente = new Cliente();
        })
       }
})
  }

onSubmit(){
  this.clienteService.salvar(this.cliente).subscribe(response=>{this.success=true;
    this.cliente= response;
    this.errors= [];
  }, errorResponse =>{
    this.errors = errorResponse.error.errors;
    this.success=false;
  }
    );
}
}
