import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

  // private URL_GET_VEHICULOS: string = 'http://localhost:8080/parqueadero/rest/vehiculo/coleccion';
  // private URL_SAVE_VEHICULO: string = 'http://localhost:8080/parqueadero/rest/vehiculo';


  constructor(public http: HttpClient) { }


  // getVehiculos(): Observable<any>{  
  //   return this.http.get<any>(environment.URL_GET_VEHICULOS)
  // }

  // guardarVehiculo(vehiculo: any): Observable<any>{
  //   console.log(vehiculo);
  //   return this.http.post<any>(environment.URL_SAVE_VEHICULO, vehiculo);
  // }

  // borrarVehiculo(placa: string): Observable<any>{
  //   return this.http.delete<any>(environment.URL_SAVE_VEHICULO + '?placa='+ placa);
  // }
}
