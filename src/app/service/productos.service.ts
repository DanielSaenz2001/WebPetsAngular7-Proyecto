import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Producto } from '../models/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  productosList: AngularFireList<any>;
  selectProducto: Producto=new Producto;

  constructor(private firebase:AngularFireDatabase) { 
    this.productosList=this.firebase.list('productos');
  }

  //Metodo para listar todos los productos (READ)
  getProductos(){
    return this.productosList=this.firebase.list('productos');
  }

  //Metodo para agregar un producto (CREATE)
  insertProducto(producto:Producto){
    this.productosList.push({
      nombre:producto.nombre,
      precio:producto.precio,
      stock:producto.stock,
      um:producto.um,
      imagen:producto.imagen,
      codigo:producto.codigo
    })
  }

  //Metodo para Actulizar un producto (UPDATE)
  udpateProducto(producto:Producto){
    this.productosList.update(producto.$key,{
      nombre:producto.nombre,
      precio:producto.precio,
      stock:producto.stock,
      um:producto.um,
      imagen:producto.imagen,
      codigo:producto.codigo
    })
  }

  //Metodo para Eliminar un producto (DELETE)
  deleteProducto($key:string){
    this.productosList.remove($key);
  }

}
