import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAssetReservationComponent } from './add-asset-reservation.component';

describe('AddAssetReservationComponent', () => {
  let component: AddAssetReservationComponent;
  let fixture: ComponentFixture<AddAssetReservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAssetReservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAssetReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
