import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'contacto',
    loadChildren: () => import('./contacto/contacto.module').then( m => m.ContactoPageModule)
  },
  {
    path: 'contacto/:uid',
    loadChildren: () => import('./contacto2/contacto2.module').then( m => m.Contacto2PageModule)
  },
  {
    path: 'editar-contacto/:uid',
    loadChildren: () => import('./editar-contacto/editar-contacto.module').then( m => m.EditarContactoPageModule)
  },
  {
    path: 'lista-contactos',
    loadChildren: () => import('./lista-contactos/lista-contactos.module').then( m => m.ListaContactosPageModule)
  },
  {
    path: 'confirmacion-mensaje',
    loadChildren: () => import('./confirmacion-mensaje/confirmacion-mensaje.module').then( m => m.ConfirmacionMensajePageModule)
  },
  {
    path: 'vehiculos-lista',
    loadChildren: () => import('./pages/vehiculos-lista/vehiculos-lista.module').then( m => m.VehiculosListaPageModule)
  },
  {
    path: 'vehiculo-crear',
    loadChildren: () => import('./pages/vehiculo-crear/vehiculo-crear.module').then( m => m.VehiculoCrearPageModule)
  },
  {
    path: 'crear-user',
    loadChildren: () => import('./pages/crear-user/crear-user.module').then( m => m.CrearUserPageModule)
  },
  {
    path: 'list-users',
    loadChildren: () => import('./pages/list-users/list-users.module').then( m => m.ListUsersPageModule)
  },
  {
    path: 'localizacion',
    loadChildren: () => import('./localizacion/localizacion.module').then( m => m.LocalizacionPageModule)
  }
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
