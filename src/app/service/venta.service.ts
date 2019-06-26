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
    this.ventaList=this.firebase.list('ventas');
  }
  getDetalles(){
    return this.ventaList=this.firebase.list('ventas');
  }
  insertVenta(venta:Venta){
    this.ventaList.push({
      
      subtotal:venta.subtotal,
      igv:venta.igv,
      total:venta.total
    })
  }
  udpateVenta(venta:Venta){
    this.ventaList.update(venta.$key,{
      fecha:venta.fecha,
      subtotal:venta.subtotal,
      igv:venta.igv,
      total:venta.total
    })
  }
  deleteVenta($key:string){
    this.ventaList.remove($key);
  }
}
