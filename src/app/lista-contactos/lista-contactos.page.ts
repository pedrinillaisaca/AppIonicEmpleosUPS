import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ContactosService } from '../service/contactos.service';

@Component({
  selector: 'app-lista-contactos',
  templateUrl: './lista-contactos.page.html',
  styleUrls: ['./lista-contactos.page.scss'],
})
export class ListaContactosPage implements OnInit {

  contactos: Observable<any[]>;//lista de cualquier objeto 

  constructor(public contactosService:ContactosService, public router:Router) { }

  ngOnInit() {
    this.contactos=this.contactosService.getContactos();
  }


  nuevoContacto(){
    this.router.navigate(['/contacto']);
  }

}



