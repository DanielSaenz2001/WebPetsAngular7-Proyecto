import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Ventadetalle } from '../models/ventadetalle';

@Injectable({
  providedIn: 'root'
})
export class VentadetallesService {
  detalleList: AngularFireList<any>;
  selectDetalle: Ventadetalle=new Ventadetalle;
  item:Ventadetalle[]=[];
  constructor(private firebase:AngularFireDatabase) { 
    this.detalleList=this.firebase.list('detalles');
  }
  getDetalles(){
    return this.detalleList=this.firebase.list('detalles');
    
  }
  insertDetalle(ventadetalle:Ventadetalle){
    this.detalleList.push({
      nombre:ventadetalle.nombre,
      precio:ventadetalle.precio,
      stock:ventadetalle.stock,
      subtotal:ventadetalle.subtotal,
      cantidad:ventadetalle.cantidad
    })
  }

 
  //Metodo para Actulizar un producto (UPDATE)
  udpateDetalle(ventadetalle:Ventadetalle){
    this.detalleList.update(ventadetalle.$key,{
      nombre:ventadetalle.nombre,
      precio:ventadetalle.precio,
      stock:ventadetalle.stock,
      subtotal:ventadetalle.subtotal,
      cantidad:ventadetalle.cantidad
    })
  }

  //Metodo para Eliminar un producto (DELETE)
  deleteDetalle($key:string){
    this.detalleList.remove($key);
  }
}
