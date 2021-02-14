import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
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
  imgData:string;
  imgURL:string;


  constructor(public route: ActivatedRoute,
    public router: Router,
    public contactosService: ContactosService) { 

    this.route.queryParams.subscribe(params => {
      console.log("CONTACTO PAGE");
      console.log(params);
      if (this.router.getCurrentNavigation().extras.queryParams) {
        this.mensajee = this.router.getCurrentNavigation().extras.queryParams.contacto;
        console.log(this.mensajee);
      }
    });
  }

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

  imageSeleccionado(data:string){
    this.imgData=data;
  }
 

  uploadFinished(data){
    this.mensajee.image=data;
  }
}
