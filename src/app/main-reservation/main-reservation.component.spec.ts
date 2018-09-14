import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainReservationComponent } from './main-reservation.component';

describe('MainReservationComponent', () => {
  let component: MainReservationComponent;
  let fixture: ComponentFixture<MainReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
