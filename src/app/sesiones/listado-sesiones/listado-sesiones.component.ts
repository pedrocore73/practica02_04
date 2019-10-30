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
  sesiones: any;

  constructor(private route: ActivatedRoute,
              private sesionesService: SesionesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.cargarSesiones();
  }

  cargarSesiones(){
    this.sesionesService.getSesiones(this.id)
                  .subscribe((res:any)=>{
                    this.sesiones = res.sesiones;
                    console.log(this.sesiones);
                  },(error: any)=>{
                    console.log(error);
                  })
  }

}
