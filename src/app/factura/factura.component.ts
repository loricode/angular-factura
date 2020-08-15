import { Component, OnInit } from '@angular/core';
import { BookService} from '../servicio/book.service';
import {FormControl} from '@angular/forms';
import {  Factura } from '../servicio/Factura';
@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {
  idproveedor: FormControl = new FormControl('') 
  nombre: FormControl = new FormControl('')
  apellido: FormControl = new FormControl('')
  facturas:  Factura[] = []
  constructor(public _bookService: BookService) { }

  ngOnInit(): void {
    this.getFacturas()
  }

  getFacturas(){
    this._bookService.getFacturas().subscribe( response =>{
      console.log(response)
      return  this.facturas=response   
    })
  }

  addFactura():void {
    let idproveedor = this.idproveedor.value
    let nombre = this.nombre.value;
    let apellido = this.apellido.value;
    this._bookService.addFactura(idproveedor, nombre, apellido)
        .subscribe(data => { 
       //  this.getBooks()
        this.idproveedor.setValue('')
         this.nombre.setValue("")
         this.apellido.setValue("")
       })
 
  } 


}
