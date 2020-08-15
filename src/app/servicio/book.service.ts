import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Factura } from './Factura';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BookService {
  
 // URL = "http://localhost/applibrolaravel/public/libro";
    URL = "http://localhost:8080/api/proveedor";
  constructor(private _http :HttpClient) { }

  getFacturas(): Observable<Factura[]> {
    return this._http.get<Factura[]>(this.URL);

  }

  addFactura(idproveedor : string , nombre:string, apellido:string): Observable<any>{
   // const obj = new FormData();
    //obj.append("idproveedor",idproveedor);
    //obj.append("nombre", nombre);
    //obj.append("apellido", apellido);
    let obj={idproveedor,nombre,apellido}
    return this._http.post(this.URL, obj )
  }


}


