import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSafeRidePassengerComponent } from './modal-safe-ride-passenger.component';

describe('ModalSafeRidePassengerComponent', () => {
  let component: ModalSafeRidePassengerComponent;
  let fixture: ComponentFixture<ModalSafeRidePassengerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalSafeRidePassengerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSafeRidePassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
