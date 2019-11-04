import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
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
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/)]]
    })
    console.log(this.formLogin.get('email'));
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
