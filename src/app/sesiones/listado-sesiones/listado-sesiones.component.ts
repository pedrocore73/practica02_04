import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SesionesService } from 'src/app/servicios/sesiones.service';

@Component({
  selector: 'app-listado-sesiones',
  templateUrl: './listado-sesiones.component.html',
  styleUrls: ['./listado-sesiones.component.css']
})
export class ListadoSesionesComponent implements OnInit {

  id: string;
  nombre: string;
  apellidos: string;
  sesiones: any;

  constructor(private route: ActivatedRoute,
              private sesionesService: SesionesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.nombre = this.route.snapshot.params.nombre;
    this.apellidos = this.route.snapshot.params.apellidos;
    this.cargarSesiones();
  }

  cargarSesiones(){
    this.sesionesService.getSesiones(this.id)
                  .subscribe((res:any)=>{
                    this.sesiones = res.sesiones;
                    this.addDuracion();
                  },(error: any)=>{
                    console.log(error);
                  })
  }
                     
  addDuracion() {
    for(let i=0; i < this.sesiones.length; i++) {  
      if(this.sesiones[i].logout) {
        let inicio = new Date(this.sesiones[i - 1].login);
        let fin = new Date(this.sesiones[i].logout);
        let duracionMs = fin.getTime() - inicio.getTime();
        let segundos = Math.floor((duracionMs / 1000) % 60);
        let minutos = Math.floor((duracionMs / (1000 * 60)) % 60);
        let horas = Math.floor((duracionMs / (1000 * 60 * 60)) % 24);
        let duracion = ('0'+horas).slice(-2) + ' h ' + ('0'+minutos).slice(-2) + ' m ' + ('0'+segundos).slice(-2) + ' s';
        this.sesiones[i].duracion = duracion;
      }
    }
  }

}
