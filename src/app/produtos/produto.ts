import { Cliente } from "../clientes/cliente";

export class Produto{
    produto: String="";
	descricao: String="";
	valor!: number;
	cpfCompra: String="";
	codProduto: String="";
    dataCompra: any;
	cliente!: Cliente;
}