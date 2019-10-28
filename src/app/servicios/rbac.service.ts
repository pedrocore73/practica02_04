import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RbacService {

  urlLogin = environment.urlLogin;

  constructor(private http: HttpClient) { }

  login(credenciales) {
    return this.http.post(this.urlLogin, credenciales).pipe(
      map((res: any)=>{
        console.log(res);
        return res;
      })
    )
  }

}
