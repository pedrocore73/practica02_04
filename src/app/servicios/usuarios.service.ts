import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  urlUsuarios = environment.urlUsuarios;

  constructor(private http: HttpClient) { }

  getUsuarios() {
    return this.http.get(this.urlUsuarios).pipe(
      map((res: any)=>{
        return res;
      })
    )
  }

  getUsuario(id) {
    return this.http.get(this.urlUsuarios + `/${id}`).pipe(
      map((res: any)=>{
        return res;
      })
    )
  }

  postUsuario(usuario) {
    return this.http.post(this.urlUsuarios, usuario).pipe(
      map((res: any)=>{
        return res;
      })
    )
  }

  putUsuario(id, usuario) {
    return this.http.put(this.urlUsuarios + `/${id}`, usuario).pipe(
      map((res: any)=>{
        return res;
      })
    )
  }

  deleteUsuario(id) {
    return this.http.delete(this.urlUsuarios + `/${id}`).pipe(
      map((res: any)=>{
        return res;
      })
    )
  }

}
