import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { Router } from '@angular/router';
import { Producto } from '../app/models/producto';
import { ProductosService } from '../app/service/productos.service';
import  Swal  from 'sweetalert2';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogin:boolean;
  productoList: Producto[];
  buscar:string;
  constructor(private authService:AuthService, private router:Router,private productosService:ProductosService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(auth=>{
      if(auth){
        this.isLogin=true;
      }else{
        this.isLogin=false;
      }
    })
  }

  onLogout(){
    this.authService.logout();
    this.router.navigate(['./']);
  }
  
}
