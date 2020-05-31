import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'; //Para usar el modal

@Component({
  selector: 'app-modal-colossus',
  templateUrl: './modal-colossus.component.html',
  styleUrls: ['./modal-colossus.component.scss']
})
export class ModalColossusComponent implements OnInit {

  Project = "Colossus";
  Lenguaje = "Typescript";
  Framework = "Angular 7";
  Frontend = ["HTML5","CCS3"];
  Backend = ["NodeJS","ExpressJS"];
  Manejador = "GIT";
  BD = "PostgreSQL";


  constructor(
    public activeModal: NgbActiveModal,
    config: NgbCarouselConfig
    ) 
    { 
      config.wrap = false;  
      config.keyboard = false;  
      config.pauseOnHover = false;  
    }

  ngOnInit(): void {
  }

}
