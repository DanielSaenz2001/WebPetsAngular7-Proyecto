import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Fact } from '../models/fact';


@Injectable({
  providedIn: 'root'
})
export class FacturaService {
  factList: AngularFireList<any>;
  selectFact: Fact=new Fact;

  constructor(private firebase:AngularFireDatabase) { 
    this.factList=this.firebase.list('facturas');
  }
  getFact(){
    return this.factList=this.firebase.list('facturas');
  }
  insertFact(fact:Fact){
    this.factList.push({
      cliente:fact.cliente,
      direccion:fact.direccion,
      fecha:fact.fecha,
      subtotal:fact.subtotal,
      igv:fact.igv,
      total:fact.total
    })
  }
  udpateFact(fact:Fact){
    this.factList.update(fact.$key,{
      cliente:fact.cliente,
      direccion:fact.direccion,
      fecha:fact.fecha,
      subtotal:fact.subtotal,
      igv:fact.igv,
      total:fact.total
    })
  }
  deleteFact($key:string){
    this.factList.remove($key);
  }
}
