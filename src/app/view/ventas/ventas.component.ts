import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../models/cliente';
import { ClientesService } from '../../service/clientes.service';
import  Swal  from 'sweetalert2';
import { Producto } from '../../models/producto';
import { ProductosService } from '../../service/productos.service';
import { VentadetallesService } from '../../service/ventadetalles.service';
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

  total:number;
  igv:number;
  tototal:number;
  algo:number;
  acc=0;

  constructor(private clientesService:ClientesService,private productosService:ProductosService, public ventadetallesService:VentadetallesService) { 
  }
    
  ngOnInit() {

  }
  onNewItem(detalle:Ventadetalle,cantidad:string){
    console.log(detalle.nombre+" - "+cantidad);
    let subtotal=parseInt(cantidad)*parseFloat(detalle.precio);
    let antes=detalle.stock;
    detalle.stock=String(parseInt(antes)-parseInt(cantidad));

    let newDetalle = new Ventadetalle;
    newDetalle.nombre = detalle.nombre;
    newDetalle.precio = detalle.precio;
    newDetalle.cantidad = cantidad;
    newDetalle.stock = detalle.stock;
    newDetalle.subtotal = String(subtotal);
      //this.data.addTarea(newTarea)

    this.ventadetallesService.insertDetalle(newDetalle);


    return this.ventadetallesService.getDetalles().snapshotChanges().subscribe(item=>{
      this.detalleList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.detalleList.push(x as Ventadetalle);
      });
      this.total = this.detalleList.reduce((acc,obj,) => acc + (parseFloat(obj.subtotal)),0);
        console.log("Total: ", this.total);
      this.igv = this.detalleList.reduce((acc,obj,) => acc + (parseFloat(obj.subtotal)/100),0);
        console.log("IGV: ", this.igv);
      this.tototal = this.detalleList.reduce((acc,obj,) => acc + ((parseFloat(obj.subtotal)/100) + (parseFloat(obj.subtotal))) ,0);
        console.log("tototal: ", this.tototal);
    });
    
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
  onDelete($key:string){
    this.ventadetallesService.deleteDetalle($key);
  }
}
