import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { RbacService } from './servicios/rbac.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  isPermisos = false;
  subscripPermisos: Subscription;

  constructor(private rbacService: RbacService,
              private route: Router) {
      this.subscripPermisos = this.rbacService.isPermisosIn
                                      .subscribe((data:any)=>{
                                        if(data.permisos) {
                                          this.isPermisos = true;
                                        } else {
                                          this.isPermisos = false;
                                        }
                                      }, (error:any)=>{
                                        console.log(error);
                                      })
  }
  
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if (this.isPermisos) {
      return true;
    } else {
      this.route.navigate(['/']);
    }
      
  }
  
}
