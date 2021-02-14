import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(public http:HttpClient) { }

  getUsuarios():Observable<any>{
    return this.http.get<any>(environment.URL_API_REST)
  }

  guardarUsuario(usuario: any):Observable<any>{
    console.log(usuario)
    return this.http.post<any>(environment.URL_API_REST,usuario)
  }

  eliminarUsuario(id:string):Observable<any>{
    console.log(environment.URL_API_REST_del+id)
    let p=environment.URL_API_REST_del+id
    return this.http.delete<any>(p)
  }


  updateUser(usuario:any):Observable<any>{
    return this.http.put<any>(environment.URL_API_REST,usuario)
  }
}
