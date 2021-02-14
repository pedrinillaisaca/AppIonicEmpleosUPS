import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Usuario } from 'src/app/model/usuario';
import { UsuariosService } from 'src/app/service/usuarios.service';
import { NotificacionesService } from '../../service/notificaciones.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.page.html',
  styleUrls: ['./list-users.page.scss'],
})
export class ListUsersPage implements OnInit {
  usuarios:any
  constructor(public usuarioSrv:UsuariosService,
    public notificacionesService:NotificacionesService,
    private router:Router) { }

  ngOnInit() {
    this.usuarios=this.usuarioSrv.getUsuarios();
    console.log("pedro");
    console.log(this.usuarios);
  }

  editarUsuario(usuario:any){

    console.log(usuario)

    let params:NavigationExtras={
      queryParams:{
        usuario:usuario
      }      
    };
    this.router.navigate(["/crear-user"],params);
  }


  async borrarUser(id: string){
    this.usuarioSrv.eliminarUsuario(id)
    this.notificacionesService.notificacionToast("Registro borrado");
  }

  async confirmarBorradoUser(id:string) {
    this.notificacionesService.confirmacion(
        "Confirmar", 
        "Esta seguro de borrar", 
        this.borrarUser.bind(this, id));
  }

}
