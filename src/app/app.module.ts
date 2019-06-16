import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Librerias para AngularFirebase
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { EmpresaComponent } from './view/empresa/empresa.component';
import { ProductosComponent } from './view/productos/productos.component';
import { EspecialesComponent } from './view/especiales/especiales.component';
import { ContactoComponent } from './view/contacto/contacto.component';
import { LoginComponent } from './view/login/login.component';
import { ProductoAddComponent } from './view/productos/producto-add/producto-add.component';
import { ProductoListComponent } from './view/productos/producto-list/producto-list.component';
import { FormsModule } from '../../node_modules/@angular/forms';
import { AdminComponent } from './view/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    EmpresaComponent,
    ProductosComponent,
    EspecialesComponent,
    ContactoComponent,
    LoginComponent,
    ProductoAddComponent,
    ProductoListComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), //Conexion a Firebase
    AngularFireAuthModule, //Para usar el Autentificación de firebase
    AngularFireDatabaseModule //Para usar la base de datos de firebase
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
