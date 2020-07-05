import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  titulo = "";
  fecha = "";
  descripcion = "";
  education:any[] = [
    {
      titulo: 'Ing. en Informática',
      fecha: '2012-2020',
      descripcion: 'Graduado en la Universidad Centroccidental "Lisandro Alvarado", obtiendo el titulo universitario de Ingeniero en Informatica. '      
    },
    {
      titulo: 'Introducción al Desarrollo Web',
      fecha: '01/2017',
      descripcion: 'Curso de Introducción al Desarrollo Web: HTML y CSS (1/2) emitido por Google Activate'
    },
    {
      titulo: 'Pasantías Profesionales',
      fecha: '05/2019',
      descripcion: 'Desarrollo de un MVP (Producto Mínimo Viable), una aplicación móvil de servicios de transporte privado.'
    },
    {
      titulo: 'IBM Cloud Essentials',
      fecha: '06/2019',
      descripcion: 'Curso de IBM - Cloud Essentials. Todo lo referente a la nube de IBM'
    },
    {
      titulo: 'Curso Profesional de React',
      fecha: '04/2020',
      descripcion: 'Principios básicos de como implementar React emitido por CódigoFacilito'
    },
    {
      titulo: 'Curso Profesional de Javascript',
      fecha: '05/2020',
      descripcion: 'Aplicación intermedia de Javascript emitido por CódigoFacilito'
    }

  ]
  constructor() { }

  ngOnInit(): void {
  }

  educations(number:any){
    console.log("aqiu")
    if(number == 1){
      this.titulo = this.education[number-1].titulo;
      this.fecha = this.education[number-1].fecha;
      this.descripcion = this.education[number-1].descripcion;
    }else if(number == 2){
      this.titulo = this.education[number-1].titulo;
      this.fecha = this.education[number-1].fecha;
      this.descripcion = this.education[number-1].descripcion;
    }else if(number == 3){
      this.titulo = this.education[number-1].titulo;
      this.fecha = this.education[number-1].fecha;
      this.descripcion = this.education[number-1].descripcion;
    }else if(number == 4){
      this.titulo = this.education[number-1].titulo;
      this.fecha = this.education[number-1].fecha;
      this.descripcion = this.education[number-1].descripcion;
    }else if(number == 5){
      this.titulo = this.education[number-1].titulo;
      this.fecha = this.education[number-1].fecha;
      this.descripcion = this.education[number-1].descripcion;
    }else if(number == 6){
      this.titulo = this.education[number-1].titulo;
      this.fecha = this.education[number-1].fecha;
      this.descripcion = this.education[number-1].descripcion;
    }
  }

}
