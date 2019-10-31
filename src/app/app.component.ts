import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
    ngOnInit() {
      window.addEventListener("unload", exitSesion, false);

      function exitSesion() {
        let id = localStorage.getItem('id');
        if (id) {
          let data = JSON.stringify({idUsuario: id, logout: new Date()});  
          console.log(data); 
          navigator.sendBeacon('http://localhost:3000/sesion', data)
        }
      }

    }
}
