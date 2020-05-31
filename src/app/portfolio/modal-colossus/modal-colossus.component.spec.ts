import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalColossusComponent } from './modal-colossus.component';

describe('ModalColossusComponent', () => {
  let component: ModalColossusComponent;
  let fixture: ComponentFixture<ModalColossusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalColossusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalColossusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
