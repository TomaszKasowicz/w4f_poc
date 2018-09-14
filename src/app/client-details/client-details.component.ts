import { Observable } from 'rxjs';
import { APIService } from './../api.service';
import { Client, MainReservation } from './../model';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  @Input() client: Client;
  mainReservations: MainReservation[];

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private api: APIService
  ) {
    console.log('ClientDetails ctor');
  }

  ngOnInit() {
    console.log('ClientDetails ngOnInit');
    this.getClient();
  }

  getClient(): void {
    console.log('ClientDetails getClient');
    const id = +this.route.snapshot.paramMap.get('id');
    this.api.getClient(id)
    .subscribe(client => {
      if (!client.mainReservations) {
        client.mainReservations = [];
      }
      this.client = client;
      this.api.updateClient(this.client).subscribe(() => {});
      this.getReservations();
    });
  }

  goBack() {
    this.location.back();
  }

  save() {
    this.api.updateClient(this.client)
    .subscribe(() => this.goBack());
  }

  getReservations() {
    console.log('getReservations');
    this.api.serachReservationsByClientId(this.client.id)
    .subscribe(res => this.mainReservations = res);
  }

  today(): string {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let dateStr = `${year}-`;
    if (month < 10) {
      dateStr += '0';
    }
    dateStr += `${month}-`;

    if (day < 10) {
      dateStr += '0';
    }
    dateStr += day;
    return dateStr;
  }

  createNewReservation(info: string, date: string) {
    this.api.addMainReservation({ client_id : this.client.id, info: info, date: date } as MainReservation)
    .subscribe(newMainRes => {
      this.client.mainReservations.push(newMainRes.id);
      this.mainReservations.push(newMainRes);
      this.api.updateClient(this.client).subscribe(() => {});
    });
  }

}
