import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Mensaje } from '../model/mesaje';

import { first } from 'rxjs/operators';

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
    return this.afs.collection("contactos").valueChanges();
  }
  


  async getContactoById(uid: string){
    try{
        let aux = await this.afs.collection("contactos", 
            ref => ref.where('uid', '==', uid))
                      .valueChanges().pipe(first()).toPromise().then(doc => {                    	  
                          return doc;
                      }).catch(error => {
                          throw error;
                      });
        if(aux==null)
            return {};
        return aux[0];
    }catch(error){
      console.error("Error get contactos ById", error);
      throw error;
    } 
  }

  getContactoById2(uid: string) :Observable<any>{
    console.log("ACTIVE SERVICIO");
    return this.afs.collection("contactos", 
            ref => ref.where('uid', '==', uid))
                      .valueChanges();
  }

  borrarContacto(uid: string){
    const refContacto = this.afs.collection("contactos");
    
    const aux = {deleted: true};
    refContacto.doc(uid).set( {...aux}, { merge: true})
  }

}
