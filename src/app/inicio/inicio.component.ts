import { Component, OnInit } from '@angular/core';
import { RbacService } from '../servicios/rbac.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(private rbacService: RbacService) { }

  ngOnInit() {
  }

  logOut() {
    this.rbacService.logout();
  }

}
