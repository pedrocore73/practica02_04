import { Component, OnInit } from '@angular/core';
import { RbacService } from '../servicios/rbac.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  permisos: any;
  subscripPermisos: Subscription;

  constructor(private rbacService: RbacService) { 
    this.subscripPermisos = this.rbacService.isPermisosIn
                                    .subscribe((data:any)=>{
                                      this.permisos = data.permisos;
                                      console.log(this.permisos);
                                    }, (error: any)=>{
                                      console.log(error);
                                    })
  }

  ngOnInit() {
  }

  logOut() {
    this.rbacService.logout();
  }

}
