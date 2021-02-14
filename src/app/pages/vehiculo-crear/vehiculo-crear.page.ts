import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NotificacionesService } from 'src/app/service/notificaciones.service';
import { VehiculosService } from 'src/app/service/vehiculos.service';



@Component({
  selector: 'app-vehiculo-crear',
  templateUrl: './vehiculo-crear.page.html',
  styleUrls: ['./vehiculo-crear.page.scss'],
})
export class VehiculoCrearPage implements OnInit {
  vehiculo: any ;
  constructor(private route: ActivatedRoute, private router: Router,
    private vhService: VehiculosService, private ns: NotificacionesService) {
      

      this.route.queryParams.subscribe(params => {
        console.log(params);
        if (this.router.getCurrentNavigation().extras.queryParams) {
          this.vehiculo = this.router.getCurrentNavigation().extras.queryParams.vehiculo;
          console.log(this.vehiculo);
          
        }
      });
  
    }

  ngOnInit() {
  }

  // guardar(){

  //   this.vhService.guardarVehiculo(this.vehiculo).subscribe(data => {
  //     console.log(data)
  //     if(data.code=="OK"){
  //         this.ns.notificacionToast("Guardaro satisfactorio");
  //     }else{
  //         this.ns.notificacionToast(data.mensaje);
  //     }

  //   });
  // }

}
