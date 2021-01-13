import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../model/mesaje';

@Injectable({
  providedIn: 'root'
})
export class ContactosService {

  constructor(public afs: AngularFirestore) { }
  saveContacto(contacto: Mensaje){
      const refContacto= this.afs.collection("contactos");//referencia a la tabla de la base de datos
      if(contacto.uid==null)
        contacto.uid=this.afs.createId();

      refContacto.doc(contacto.uid).set(Object.assign({},contacto),{merge:true})//si existe lo actualiza, caso contrario lo crea

  }

  getContactos(): Observable<any[]>{//son consultas asincronas 
    //return this.afs.collection("contactos").valueChanges();
    return this.afs.collection("contactos").valueChanges();
  }
}
