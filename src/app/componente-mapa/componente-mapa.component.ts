import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente-mapa',
  templateUrl: './componente-mapa.component.html',
  styleUrls: ['./componente-mapa.component.scss'],
})
export class ComponenteMapaComponent implements OnInit {

  title = 'My first AGM project';
  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit() {}

}
