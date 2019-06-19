import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ClientesService } from '../../../service/clientes.service';

@Component({
  selector: 'app-cliente-add',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {

  constructor(public clienteService:ClientesService) { }

  ngOnInit() {
  }
  onSubmit(clienteForm:NgForm){
    this.clienteService.insertCliente(clienteForm.value);
  }
}
