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

}
