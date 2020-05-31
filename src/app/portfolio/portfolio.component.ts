import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap'; //Para usar los modales
import { ModalColossusComponent } from './modal-colossus/modal-colossus.component';
import { ModalSafeRidePassengerComponent } from './modal-safe-ride-passenger/modal-safe-ride-passenger.component';
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  constructor( private modalService: NgbModal) {
   }

  ngOnInit() {
  }

  probando() {
    console.log("Hola aqui estoy");
  }
  openModal(number) {
    if (number == 1){
    const modalRef = this.modalService.open(ModalColossusComponent, {size: 'lg'});
  }else{
    const modalRef = this.modalService.open(ModalSafeRidePassengerComponent, {size: 'lg'});
  }
  }

}
