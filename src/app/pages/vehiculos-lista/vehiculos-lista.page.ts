import { Component, OnInit } from '@angular/core';
import { VehiculosService } from '../../service/vehiculos.service';

@Component({
  selector: 'app-vehiculos-lista',
  templateUrl: './vehiculos-lista.page.html',
  styleUrls: ['./vehiculos-lista.page.scss'],
})
export class VehiculosListaPage implements OnInit {

  vehiculos: any;

  constructor(public vhService:VehiculosService) { }

  ngOnInit() {
    // this.vehiculos=this.vhService.getVehiculos();
  }

}
