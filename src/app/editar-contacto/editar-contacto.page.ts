import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Mensaje } from '../model/mesaje';
import { ContactosService } from '../service/contactos.service';

@Component({
  selector: 'app-editar-contacto',
  templateUrl: './editar-contacto.page.html',
  styleUrls: ['./editar-contacto.page.scss'],
})
export class EditarContactoPage implements OnInit {
  contacto:Mensaje;
  uid:string;
  constructor(private route:ActivatedRoute, private router:Router,public contactoSrv: ContactosService) 
  {

    this.uid = this.route.snapshot.paramMap.get('uid');
    console.log("consultando ", this.uid);

    this.contactoSrv.getContactoById2(this.uid).subscribe(data => {
      console.log("TP_ACTIVATE");
      console.log(data)
      const aux:any = data
      this.contacto = aux[0];
  });

   }
  ngOnInit() {
  }

  guardarCambios(){
    console.log(this.contacto)    
    this.contactoSrv.saveContacto(this.contacto)
    
    let params: NavigationExtras = {
      queryParams: {
        msg:this.contacto,
           
      }
    };

    this.router.navigate(['/confirmacion-mensaje'], params);

  }

}
