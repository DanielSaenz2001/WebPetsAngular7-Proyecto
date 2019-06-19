import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  clientesList: AngularFireList<any>;
  selectCliente: Cliente=new Cliente;

  constructor(private firebase:AngularFireDatabase) { 
    this.clientesList=this.firebase.list('clientes');
  }
  getClientes(){
    return this.clientesList=this.firebase.list('clientes');
  }

  insertCliente(cliente:Cliente){
    this.clientesList.push({
      nombre:cliente.nombre,
      fecha:cliente.fecha,
      dni:cliente.dni,
      direccion:cliente.direccion,
      estado:cliente.estado,
      comprobante:cliente.comprobante
    })
    console.log(cliente.nombre)
  }

  //Metodo para Actulizar un producto (UPDATE)
  udpateCliente(cliente:Cliente){
    this.clientesList.update(cliente.$key,{
      nombre:cliente.nombre,
      fecha:cliente.fecha,
      dni:cliente.dni,
      direccion:cliente.direccion,
      estado:cliente.estado,
      comprobante:cliente.comprobante
    })
  }

  //Metodo para Eliminar un producto (DELETE)
  deleteCliente($key:string){
    this.clientesList.remove($key);
  }



}
