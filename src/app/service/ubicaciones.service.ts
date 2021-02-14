import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ubicacion } from '../model/ubicacion';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UbicacionesService {

  constructor(public afs:AngularFirestore) { }

  saveUbicacion(ubicacion:Ubicacion){
    const refUbicacion= this.afs.collection("ubicaciones");//referencia a la tabla de la base de datos
      if(ubicacion.uid==null)
        ubicacion.uid=this.afs.createId();

      refUbicacion.doc(ubicacion.uid).set(Object.assign({},ubicacion),{merge:true})//si existe lo actualiza, caso contrario lo crea
  }

  getUbicaciones(): Observable<any[]>{
    return this.afs.collection("ubicaciones").valueChanges();
  }


}
