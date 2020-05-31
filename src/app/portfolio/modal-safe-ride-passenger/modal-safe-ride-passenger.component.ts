import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-safe-ride-passenger',
  templateUrl: './modal-safe-ride-passenger.component.html',
  styleUrls: ['./modal-safe-ride-passenger.component.scss']
})
export class ModalSafeRidePassengerComponent implements OnInit {

  Project = "Safe Ride Passenger";
  Lenguaje = "Typescript";
  Framework = "Ionic4";
  Frontend = ["HTML5","CCS3"];
  Backend = ["Java"];
  Manejador = "GIT";
  BD = "PostgreSQL";

  constructor(
    public activeModal: NgbActiveModal,
    public config: NgbCarouselConfig) { 
      { 
        config.wrap = false;  
        config.keyboard = false;  
        config.pauseOnHover = false;  
      }
    }

  ngOnInit(): void {
  }

}
