import { Component, OnInit } from '@angular/core';
import { faPlus, faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Cliente } from '../cliente';
import { ClientesService } from 'src/app/service/clientes.service';
@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {
  faPlus = faPlus;
  faPen = faPen;
  faTrash = faTrash;
  clientes: Cliente[] = []; 
  clienteDelete: Cliente;
  mensagemDelete!: String;
  msgSuccess: boolean = false;
  msgFail: boolean = false;
  constructor(private serviceCliente:  ClientesService){
    this.clienteDelete = new Cliente();
  }
  ngOnInit(): void {
    this.serviceCliente.listarTodos().subscribe(response=>{
      this.clientes = response;
    })
  }
  preparoDeletar(id: any){
    const modalDelete = document.getElementById("modalDelete");
    if(modalDelete!=null){
      modalDelete.style.display = "block";
      this.serviceCliente.listarPorId(id).subscribe(response=>{
        this.clienteDelete = response;
      })
    }
  }

  fecharModalDelete(){
    const modalDelete = document.getElementById("modalDelete");
    if(modalDelete!=null){
      modalDelete.style.display = "none";
    }
  }
deletarCliente(id: any): void{
  this.serviceCliente.deletarCliente(id).subscribe(response=>{
    this.clienteDelete= response;
    this.clienteDelete= new Cliente();
    this.fecharModalDelete();
    this.msgSuccess= true;
    this.mensagemDelete= "Deletado com sucesso!"
    setTimeout(()=>{
      window.location.reload();
    },2500);
  }, errorResponse=>{
    this.msgFail=true;
      this.mensagemDelete="Erro ao deletar cliente!"
  })
  }
}
