import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Fact } from '../../models/fact';
import { FacturaService } from '../../service/factura.service';
import * as jsPDF from 'jspdf';

@Component({
  selector: 'app-facturas',
  templateUrl: './facturas.component.html',
  styleUrls: ['./facturas.component.css']
})
export class FacturasComponent implements OnInit {
  factList: Fact[];
  constructor(public facturaService:FacturaService) { }

  @ViewChild('content') content: ElementRef;
  public downloadPDF(){
  

    let doc = new jsPDF();

    let specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };

    let content = this.content.nativeElement;

    doc.fromHTML(content.innerHTML, 15 ,15,{

      'width': 198,
      'elementHandlers': specialElementHandlers

    });

    doc.save('{{factList.nombre}}.pdf');
  }

  ngOnInit() {
    return this.facturaService.getFact().snapshotChanges().subscribe(item=>{
      this.factList=[];
      item.forEach(element=>{
        let x=element.payload.toJSON();
        x["$key"]=element.key;
        this.factList.push(x as Fact);
      })
    })
  }

}
