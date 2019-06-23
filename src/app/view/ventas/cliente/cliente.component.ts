import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../service/clientes.service';
import  Swal  from 'sweetalert2';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {
  clienteList: Cliente[];

  buscar:string;

  constructor(private clientesService:ClientesService) { }

  ngOnInit() {
  }
  mostrarclientes(){
  	this.clientesService.getClientes().snapshotChanges().subscribe(item=>{
      this.clienteList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.clienteList.push(x as Cliente);
      });
    });
  }
  consuCliente(){
    console.log('dada');
  	this.clientesService.getClientes().snapshotChanges().subscribe(item=>{
      this.clienteList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.clienteList.push(x as Cliente);
      });
      this.clienteList=this.clienteList.filter(data=>{
    	  return data.dni.toString().trim()===this.buscar;
      })
      if(this.clienteList.length===0){
        Swal.fire({
          position:'top-end',
          type: "success",
          title: 'Cliente No Encontrado',
          showConfirmButton: true,
          timer: 1500
        })
      }else{
        Swal.fire({
          position:'top-end',
          type: "success",
          title: 'Cliente Encontrado',
          showConfirmButton: true,
          timer: 1500
      })
    }
    })
  }
}
