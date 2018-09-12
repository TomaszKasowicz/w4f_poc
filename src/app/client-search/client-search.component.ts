import { Client } from './../model';
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { APIService } from '../api.service';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-client-search',
  templateUrl: './client-search.component.html',
  styleUrls: ['./client-search.component.css']
})
export class ClientSearchComponent implements OnInit {
  clients$: Observable<Client[]>;
  private searchTerms = new Subject<string>();

  constructor(private api: APIService) { }

  ngOnInit() {
    this.clients$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.api.searchClients(term))
    );
  }

  search(term: string): void {
    console.log(`Searching term = ${term}`);
    this.searchTerms.next(term);
  }

}
