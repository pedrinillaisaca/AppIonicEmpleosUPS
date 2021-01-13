import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Mensaje } from '../model/mesaje';
import { ContactosService } from '../service/contactos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.page.html',
  styleUrls: ['./contacto.page.scss'],
})
export class ContactoPage implements OnInit {

  // nombre: string="Pedro Illaisaca";//Los tipos de datos no son tan necesarios 
  // email: string;
  // mensaje: string;



  mensajee:Mensaje=new Mensaje();//Es importante iniciar el objeto
  trabaja: boolean=false;
  lugarTrabajo:string;

  constructor(public router: Router,public contactosService: ContactosService) { }

  ngOnInit() {
  }
  guardar(){
    // console.log(this.nombre,this.email,this.mensaje,this.trabaja)
    console.log(this.mensajee)

    this.contactosService.saveContacto(this.mensajee);

    let params: NavigationExtras={
      queryParams: {
        msg: this.mensajee,
        lugar_Trabajo: this.lugarTrabajo
      } 
    }

    this.router.navigate(['/confirmacion-mensaje'],params); //esto debe redireccionar a la pagina de config mensaje
  }
}
