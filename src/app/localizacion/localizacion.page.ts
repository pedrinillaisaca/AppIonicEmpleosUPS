import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { Ubicacion } from '../model/ubicacion';
import { LocationService } from '../service/location.service';
import { UbicacionesService } from '../service/ubicaciones.service';
import { Observable } from 'rxjs';
import { listLazyRoutes } from '@angular/compiler/src/aot/lazy_routes';


@Component({
  selector: 'app-localizacion',
  templateUrl: './localizacion.page.html',
  styleUrls: ['./localizacion.page.scss'],
})
export class LocalizacionPage implements OnInit {
  ubicacion:Ubicacion=new Ubicacion();

  listUbicaicones:Observable<any[]>;//lista de ubicaciones

  title = 'My first AGM project';
  lat = -2.9076828270256057;
  lng = -79.002031484;

  current={
    latitude:'',
    longitude:'',
    address:''
  }

  newLocation={
    latitude:'',
    longitude:'',
    address:''
  }
  constructor(
    private locationService:LocationService,
    public ubiSrv: UbicacionesService
  ) { }

  async ngOnInit() {

    this.current = await this.locationService.getCurrentLocation();

  }


  setNewLocation(event){
    if(event){
      this.newLocation.latitude = event.lat;
      this.newLocation.longitude = event.lng;
      this.locationService.getAddressOfLocation(this.newLocation);
    }
  }

  guardarMarca(){
    this.ubicacion.latitude=this.newLocation.latitude;
    this.ubicacion.longitude=this.newLocation.longitude;
    console.log(this.ubicacion);
    this.ubiSrv.saveUbicacion(this.ubicacion);
    this.ubicacion.uid=null;
  }

  async verUbicaciones(){
    this.listUbicaicones=this.ubiSrv.getUbicaciones();
    console.log("PEDRO ILLAISACA")
    console.log(this.listUbicaicones);
  }

}
