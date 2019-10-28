import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UsuariosService } from 'src/app/servicios/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  @ViewChild('nombre', {static: true}) nombreRef: ElementRef;

  formUser: FormGroup;
  mensaje: string;

  constructor(private ff: FormBuilder,
              private usuariosService: UsuariosService,
              private router: Router) { }

  ngOnInit() {
    this.nombreRef.nativeElement.focus();
    this.formUser = this.ff.group({
      nombre: '',
      apellidos: '',
      email: '',
      password: '',
      rol: ''
    })
  }

  registrarUser(){
    const user = {
      nombre: this.formUser.get('nombre').value,
      apellidos: this.formUser.get('apellidos').value,
      email: this.formUser.get('email').value,
      password: this.formUser.get('password').value,
      rol: this.formUser.get('rol').value
    }
    this.usuariosService.postUsuario(user)
                  .subscribe((res: any)=>{
                    //this.formUser.reset();
                    //this.nombreRef.nativeElement.focus();
                    this.router.navigate(['/listado-usuarios']);
                  },(error: any)=>{
                    if(error.error.error.errors.email.message) {
                      this.mensaje = error.error.error.errors.email.message;
                    } else {
                      this.mensaje = error.error.mensaje;
                    }
                  })


  }

}
