import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoUsuariosComponent } from './usuarios/listado-usuarios/listado-usuarios.component';
import { CrearUsuarioComponent } from './usuarios/crear-usuario/crear-usuario.component';
import { EditarUsuarioComponent } from './usuarios/editar-usuario/editar-usuario.component';


const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'inicio', component: InicioComponent},
  {path: 'listado-usuarios', component: ListadoUsuariosComponent},
  {path: 'crear-usuario', component: CrearUsuarioComponent},
  {path: 'editar-usuario/:id', component: EditarUsuarioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
