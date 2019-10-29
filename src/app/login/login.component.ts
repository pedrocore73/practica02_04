import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { RbacService } from '../servicios/rbac.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  mensaje: string;
  esperando = false;

  constructor(private ff: FormBuilder,
              private rbacService: RbacService,
              private router: Router) { }

  ngOnInit() {
    this.formLogin = this.ff.group({
      email: '',
      password: ''
    })
  }

  sendLogin() {
    this.esperando = true;
    const auth = {
      email: this.formLogin.get('email').value,
      password: this.formLogin.get('password').value
    }
    this.rbacService.login(auth)
            .subscribe((res: any)=>{
              this.esperando = false;
            }, (error: any)=>{
              this.esperando = false;
              this.mensaje = error.error.mensaje;
            })
  }

}
