import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RbacService {

  urlLogin = environment.urlLogin;
  urlAutorizaciones = environment.urlAutorizaciones;
  usuario: any;

  constructor(private http: HttpClient,
              private router: Router) {
    this.cargarEstado();
  }

  cargarEstado() {
    let id = localStorage.getItem('id');
    if(id){
      this.router.navigate(['/inicio']);
    }
  }

  login(credenciales) {
    return this.http.post(this.urlLogin, credenciales).pipe(
      map((res: any)=>{
        if(res.usuario) {
          this.usuario = res.usuario;
          localStorage.setItem('id', this.usuario._id);
          this.asignaPermisos(this.usuario.rol);
        }
        return res;
      })
    )
  }

  logout() {
    this.usuario = {};
    localStorage.removeItem('id');
    this.router.navigate(['/']);
  }

  asignaPermisos(rol) {
    return this.http.get(this.urlAutorizaciones).pipe(
      map((resp: any)=>{
        return resp;
      })
    ).subscribe((res: any)=>{
      let autorizaciones = res.autorizaciones;
      console.log(autorizaciones);
    }, (error: any)=>{
      console.log(error);
    })
  }

}
