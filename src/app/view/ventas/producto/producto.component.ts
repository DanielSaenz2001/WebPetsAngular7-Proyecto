import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductosService } from '../../../service/productos.service';
import  Swal  from 'sweetalert2';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})

export class ProductoComponent implements OnInit {
  productoList: Producto[];

  buscar:string;

  constructor(private productosService:ProductosService) { }

  ngOnInit() {
  }
  mostrarproductos(){
  	this.productosService.getProductos().snapshotChanges().subscribe(item=>{
      this.productoList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.productoList.push(x as Producto);
      });
    });
  }
  consuProducto(){
    console.log('dada');
  	this.productosService.getProductos().snapshotChanges().subscribe(item=>{
      this.productoList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.productoList.push(x as Producto);
      });
      this.productoList=this.productoList.filter(data=>{
    	  return data.codigo.toString().trim()===this.buscar;
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
}
