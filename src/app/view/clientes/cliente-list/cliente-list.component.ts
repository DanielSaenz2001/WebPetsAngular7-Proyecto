import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../service/clientes.service';
import { element } from '../../../../../node_modules/@angular/core/src/render3';
import  Swal  from 'sweetalert2'
import { type } from 'os';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clienteList: Cliente[];

  buscar:string;
  constructor(private clientesService:ClientesService) { }

  ngOnInit() {
    this.mostrarclientes();
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
          showConfirmButton: false,
          timer: 1500
        })
      }else{
        Swal.fire({
          position:'top-end',
          type: "success",
          title: 'Cliente Encontrado',
          showConfirmButton: false,
          timer: 1500
      })
    }
    })
  }

}
