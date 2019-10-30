import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SesionesService {

  urlSesiones = environment.urlSesiones;

  constructor(private http: HttpClient) { }

  getSesiones(id){
    return this.http.get(this.urlSesiones + '/' + id).pipe(
      map((resp: any)=>{
        return resp;
      })
    )
  }

  enviarSesion(sesion) {
    return this.http.post(this.urlSesiones, sesion).pipe(
      map((resp: any)=>{
        return resp;
      })
    )
  }

}
