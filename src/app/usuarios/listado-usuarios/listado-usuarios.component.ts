import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  usuarios: any;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit() {
    this.cargarUsuarios();
  }

  cargarUsuarios() {
    this.usuariosService.getUsuarios()
                .subscribe((res: any)=>{
                  this.usuarios = res.usuarios;
                }, (error: any)=>{
                  console.log(error);
                })
  }

  eliminarUsuario(id){
    this.usuariosService.deleteUsuario(id)
                .subscribe((res: any)=>{
                  this.cargarUsuarios();
                }, (error: any)=>{
                  console.log(error);
                })
  }

}
