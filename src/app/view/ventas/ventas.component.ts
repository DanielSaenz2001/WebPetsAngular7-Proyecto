import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClientesService } from '../../service/clientes.service';
import  Swal  from 'sweetalert2';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../service/productos.service';
import { VentadetallesService } from '../../service/ventadetalles.service';
import { NgForm } from '@angular/forms';
import { Ventadetalle } from '../../models/ventadetalle';


@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  clienteList: Cliente[];
  productoList: Producto[];
  detalleList: Ventadetalle[];
  buscar2:string;
  buscar:string;


  constructor(private clientesService:ClientesService,private productosService:ProductosService, public ventadetallesService:VentadetallesService) { }

  ngOnInit() {

  }
  consuProducto(){
    this.productosService.getProductos().snapshotChanges().subscribe(item=>{
      this.productoList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.productoList.push(x as Producto);
      });
      this.productoList=this.productoList.filter(data=>{
        return data.codigo.toString().trim()===this.buscar2;   
      })
      if(this.productoList.length===0){
        Swal.fire({
          position:'top-end',
          type: "success",
          title: 'Producto No Encontrado',
          showConfirmButton: true,
          timer: 1500
        })
      }else{
        Swal.fire({
          position:'top-end',
          type: "success",
          title: 'Producto Encontrado',
          showConfirmButton: true,
          timer: 1500
      })
    }
    
    })
    
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
          position:'center',
          type: "error",
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
  onSubmit(detallForm:NgForm){
    this.ventadetallesService.insertDetalle(detallForm.value);
    return this.ventadetallesService.getDetalles().snapshotChanges().subscribe(item=>{
      this.detalleList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.detalleList.push(x as Ventadetalle);
      })
    })
  }
  onDelete($key:string){
    this.ventadetallesService.deleteDetalle($key);
  }

}
