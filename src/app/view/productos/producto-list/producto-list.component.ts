import { Component, OnInit } from '@angular/core';
import { Producto } from '../../../models/producto';
import { ProductosService } from '../../../service/productos.service';
import { element } from '../../../../../node_modules/@angular/core/src/render3';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {
  productoList: Producto[];

  constructor(private productosService:ProductosService) { }

  ngOnInit() {
    return this.productosService.getProductos().snapshotChanges().subscribe(item=>{
      this.productoList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.productoList.push(x as Producto);
      })
    })
  }

}
