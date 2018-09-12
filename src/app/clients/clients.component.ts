import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';
import { Client } from '../model';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  constructor(private api: APIService) { }

  ngOnInit() {
  }

  addClient(firstName: string, lastName: string, email: string) {
    this.api.addClient({ firstName: firstName, lastName: lastName, email: email} as Client)
    .subscribe( newClient => {
      console.log(`Added client ${newClient.id}: ${newClient.lastName}`);
    });
  }
}
