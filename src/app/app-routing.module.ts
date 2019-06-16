import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './view/home/home.component';
import { EmpresaComponent } from './view/empresa/empresa.component';
import { ProductosComponent } from './view/productos/productos.component';
import { EspecialesComponent } from './view/especiales/especiales.component';
import { ContactoComponent } from './view/contacto/contacto.component';
import { LoginComponent } from './view/login/login.component';
import { AdminComponent } from './view/admin/admin.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'empresa',component:EmpresaComponent},
  {path:'productos',component:ProductosComponent},
  {path:'especiales',component:EspecialesComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'login',component:LoginComponent},
  {path:'admin',component:AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
