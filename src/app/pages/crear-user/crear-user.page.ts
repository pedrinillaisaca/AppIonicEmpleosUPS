import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { NotificacionesService } from '../../service/notificaciones.service';
import { first } from 'rxjs/operators';



@Component({
  selector: 'app-crear-user',
  templateUrl: './crear-user.page.html',
  styleUrls: ['./crear-user.page.scss'],
})
export class CrearUserPage implements OnInit {
  //usuario:any;
  usuario:Usuario=new Usuario();
  usuario1:Usuario=new Usuario();


  constructor(private route:ActivatedRoute,
    private router:Router,
    private ns:NotificacionesService,
    private SrvUsuario:UsuariosService) { 

    this.route.queryParams.subscribe(params=>{
      console.log(params);
      if(this.router.getCurrentNavigation().extras.queryParams){
        this.usuario1=this.router.getCurrentNavigation().extras.queryParams.usuario;
        this.usuario=this.usuario1;
        console.log(this.usuario);
      }
    });

  }


  ngOnInit() {
  }

  guardarUser(){  
    
    if(JSON.stringify(this.usuario1)=='{}'){
      this.SrvUsuario.guardarUsuario(this.usuario).subscribe(data=>{
      console.log("pedro"+data);
      if(data.code=="OK"){
        
      }else{
        this.ns.notificacionToast(data.mensaje);
        this.ns.notificacionToast("El Usuario ha sido Guardado Correctamente")
      }
    });
    }else{
      this.SrvUsuario.updateUser(this.usuario);
    }
    
    
  }

}
