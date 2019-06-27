import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Venta } from '../models/venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  ventaList: AngularFireList<any>;
  selectVenta: Venta=new Venta;

  constructor(private firebase:AngularFireDatabase) { 
    this.ventaList=this.firebase.list('venta_detalles_permanente');
  }
  getDetalles(){
    return this.ventaList=this.firebase.list('venta_detalles_permanente');
  }
  insertVenta(venta:Venta){
    this.ventaList.push({
      nombre:venta.nombre,
      precio:venta.precio,
      subtotal:venta.subtotal,
      cantidad:venta.cantidad
    })
  }
  udpateVenta(venta:Venta){
    this.ventaList.update(venta.$key,{
      nombre:venta.nombre,
      precio:venta.precio,
      subtotal:venta.subtotal,
      cantidad:venta.cantidad
    })
  }
  deleteVenta($key:string){
    this.ventaList.remove($key);
  }
}
