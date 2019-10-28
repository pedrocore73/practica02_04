import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  formUser: FormGroup;
  usuario: any;
  id: string;
  lock = true;

  constructor(private route: ActivatedRoute,
              private usuariosService: UsuariosService,
              private ff: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.formUser = this.ff.group({
      nombre: '',
      apellidos: '',
      email: '',
      password: '',
      rol: ''
    })
    this.usuariosService.getUsuario(this.id)
                  .subscribe((res: any)=>{
                    this.usuario = res.usuario;
                    this.formUser.get('nombre').setValue(this.usuario.nombre);
                    this.formUser.get('apellidos').setValue(this.usuario.apellidos);
                    this.formUser.get('email').setValue(this.usuario.email);
                    // this.formUser.get('password').setValue(this.usuario.password);
                    this.formUser.get('rol').setValue(this.usuario.rol);
                  },(error: any)=>{
                    console.log(error);
                  })
  }

  modificarUser(){
    const user = {
      nombre: this.formUser.get('nombre').value,
      apellidos: this.formUser.get('apellidos').value,
      password: this.formUser.get('password').value,
      rol: this.formUser.get('rol').value
    }
    this.usuariosService.putUsuario(this.id, user)
                .subscribe((res: any)=>{
                  this.router.navigate(['/listado-usuarios']);
                }, (error: any)=>{
                  console.log(error)
                })
  }

}
