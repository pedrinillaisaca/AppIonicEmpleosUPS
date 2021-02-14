import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Mensaje } from '../model/mesaje';
import { ContactosService } from '../service/contactos.service';

@Component({
    selector: 'app-contacto2',
    templateUrl: './contacto2.page.html',
    styleUrls: ['./contacto2.page.scss'],
  })
export class Contacto2Page implements OnInit {
  mensajee:Mensaje=new Mensaje();//Es importante iniciar el objeto
  trabaja: boolean=false;
  lugarTrabajo:string;

  uid:string;
  constructor(private route:ActivatedRoute, private router:Router,public contactoSrv: ContactosService) 
  {

    this.uid = this.route.snapshot.paramMap.get('uid');
    console.log("consultando ", this.uid);

    this.contactoSrv.getContactoById2(this.uid).subscribe(data => {
      
      console.log(data)
      const aux:any = data
      this.mensajee = aux[0];
  });

   }
  ngOnInit() {
  }

  guardar(){
    console.log(this.mensajee)    
    this.contactoSrv.saveContacto(this.mensajee)
    
    let params: NavigationExtras={
      queryParams: {
        msg: this.mensajee,
        lugar_Trabajo: this.lugarTrabajo
      } 
    }


    this.router.navigate(['/confirmacion-mensaje'], params);

  }

}










// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-contacto2',
//   templateUrl: './contacto2.page.html',
//   styleUrls: ['./contacto2.page.scss'],
// })
// export class Contacto2Page implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
