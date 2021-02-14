import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Mensaje } from '../model/mesaje';
import { ContactosService } from '../service/contactos.service';
import { NotificacionesService } from '../service/notificaciones.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
})
export class ListaContactosPage implements OnInit {

  contactos: Observable<any[]>;//lista de cualquier objeto 

  constructor(
    public contactosService:ContactosService,
    public router:Router,
    public notificacionesService:NotificacionesService) 
    { }

  ngOnInit() {
    this.contactos=this.contactosService.getContactos();
  }


  nuevoContacto(){
    this.router.navigate(['/contacto']);
  }

   editarContacto(contactoParam:Mensaje){
    console.log(contactoParam)
    let params: NavigationExtras={
      queryParams: {
        contacto: contactoParam
      } 
    }
    //this.router.navigate(['/editar-contacto'],params)
    this.router.navigate(['/contacto'],params)
  }

  editarContactoForId(uid:string){
    const url = '/contacto/' + uid;
    //const url = '/editar-contacto/' + uid;  
    console.log("PARAMETROS");
    console.log(url);
    this.router.navigate([url]);

  }

  async borrarContacto(uid: string){
    this.contactosService.borrarContacto(uid);
    this.notificacionesService.notificacionToast("Registro borrado");
  }

  async confirmarBorrado(uid: string) {
    this.notificacionesService.confirmacion(
        "Confirmar", 
        "Esta seguro de borrar", 
        this.borrarContacto.bind(this, uid));
  }
}



