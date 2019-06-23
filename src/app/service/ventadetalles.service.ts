import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Ventadetalle } from '../models/ventadetalle';

@Injectable({
  providedIn: 'root'
})
export class VentadetallesService {
  detalleList: AngularFireList<any>;
  selectDetalle: Ventadetalle=new Ventadetalle;

  constructor(private firebase:AngularFireDatabase) { 
    this.detalleList=this.firebase.list('detalles');
  }
  getDetalles(){
    return this.detalleList=this.firebase.list('detalles');
  }
  insertDetalle(ventadetalle:Ventadetalle){
    this.detalleList.push({
      producto:ventadetalle.producto,
      codigo:ventadetalle.codigo,
      precio:ventadetalle.precio,
      um:ventadetalle.um,
      cantidad:ventadetalle.cantidad,
      importe:ventadetalle.importe
    })
  }

  //Metodo para Actulizar un producto (UPDATE)
  udpateDetalle(ventadetalle:Ventadetalle){
    this.detalleList.update(ventadetalle.$key,{
      producto:ventadetalle.producto,
      codigo:ventadetalle.codigo,
      precio:ventadetalle.precio,
      um:ventadetalle.um,
      cantidad:ventadetalle.cantidad,
      importe:ventadetalle.importe
    })
  }

  //Metodo para Eliminar un producto (DELETE)
  deleteDetalle($key:string){
    this.detalleList.remove($key);
  }
}
