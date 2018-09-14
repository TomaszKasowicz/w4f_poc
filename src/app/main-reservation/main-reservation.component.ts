import { APIService } from './../api.service';
import { MainReservation } from './../model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main-reservation',
  templateUrl: './main-reservation.component.html',
  styleUrls: ['./main-reservation.component.css']
})
export class MainReservationComponent implements OnInit {
  showAssetReservationCreateComponent = false;

  @Input() mainReservation: MainReservation;

  constructor(private api: APIService) { }

  ngOnInit() {
    this.api.getAssetReservations(this.mainReservation.client_id);
  }

  addAssetReservation() {
    this.showAssetReservationCreateComponent = true;
  }

  getAssetReservations
}
