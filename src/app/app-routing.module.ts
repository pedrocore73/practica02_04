import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoUsuariosComponent } from './usuarios/listado-usuarios/listado-usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';
import { ListadoSesionesComponent } from './sesiones/listado-sesiones/listado-sesiones.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'listado-usuarios', component: ListadoUsuariosComponent, canActivate: [AuthGuard]},
  {path: 'crear-usuario', component: CrearUsuarioComponent, canActivate: [AuthGuard]},
  {path: 'editar-usuario/:id', component: EditarUsuarioComponent, canActivate: [AuthGuard]},
  {path: 'listado-sesiones/:id/:nombre/:apellidos', component: ListadoSesionesComponent, canActivate: [AuthGuard]},
  {path: '**', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
