import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../../service/productos.service';
import { NgForm } from '@angular/forms';
import { Producto } from '../../../models/producto';

@Component({
  selector: 'app-producto-add',
  templateUrl: './producto-add.component.html',
  styleUrls: ['./producto-add.component.css']
})
export class ProductoAddComponent implements OnInit {

  constructor(public productoService:ProductosService) { }

  ngOnInit() {
  }

  onSubmit(productoForm:NgForm){
    this.productoService.insertProducto(productoForm.value);
  }
}
