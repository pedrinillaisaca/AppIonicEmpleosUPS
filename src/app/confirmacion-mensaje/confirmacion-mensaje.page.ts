import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mensaje } from '../model/mesaje';
import { ContactosService } from '../service/contactos.service';

@Component({
  selector: 'app-confirmacion-mensaje',
  templateUrl: './confirmacion-mensaje.page.html',
  styleUrls: ['./confirmacion-mensaje.page.scss'],
})
export class ConfirmacionMensajePage implements OnInit {

  mensajee: Mensaje;
  lugar_trabajo: string;

  constructor(private route: ActivatedRoute,private router: Router) {

    this.route.queryParams.subscribe(params=>{
      console.log(params)
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.mensajee=this.router.getCurrentNavigation().extras.queryParams.msg;
        this.lugar_trabajo=this.router.getCurrentNavigation().extras.queryParams.lugar_Trabajo;        
        console.log(this.lugar_trabajo)
      }
    });

   }

  ngOnInit() {
  }

}
