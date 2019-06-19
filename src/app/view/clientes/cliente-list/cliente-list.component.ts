import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../../models/cliente';
import { ClientesService } from '../../../service/clientes.service';
import { element } from '../../../../../node_modules/@angular/core/src/render3';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clienteList: Cliente[];
  constructor(private clientesService:ClientesService) { }

  ngOnInit() {
    return this.clientesService.getClientes().snapshotChanges().subscribe(item=>{
      this.clienteList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.clienteList.push(x as Cliente);
      })
    })
  }

}
