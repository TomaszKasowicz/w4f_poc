import { Client, MainReservation } from './model';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';
import { map, catchError, tap, mergeMap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class APIService {
  private baseUrl = 'api';
  private clientsUrl = `${this.baseUrl}/clients`;
  private boardsUrl = `${this.baseUrl}/boards`;
  private mainReservationsUrl = `${this.baseUrl}/mainReservations`;
  private boardReservationsUrl = `${this.baseUrl}/boardReservations`;

  constructor(
    private http: HttpClient
  ) { }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.clientsUrl).pipe(
      tap(data => console.log(data)),
      catchError(this.handleError('getClients', []))
    );
  }

  getClient(id: number): Observable<Client> {
    const url = `${this.clientsUrl}/${id}`;
    return this.http.get<Client>(url, httpOptions).pipe(
      tap(r => console.log(r)),
      catchError(this.handleError<Client>(`getClient id=${id}`))
    );
  }

  searchClients(term: string): Observable<Client[]> {
    console.log('searchClients', term);
    if (!term.trim()) {
      console.log('searchClients return []');
      return of([]);
    }

    const url = `${this.clientsUrl}?lastName=${term}`;
    console.log('searchClients url = ', url);
    return this.http.get<Client[]>(url).pipe(
      tap(res => console.log(`searchClient Tap: ${res}`)),
      catchError(this.handleError<Client[]>('searchClients', []))
    );
  }

  addClient(client: Client): Observable<Client> {
    console.log(client);
    return this.http.post<Client>(this.clientsUrl, client, httpOptions).pipe(
      tap((clientTap: Client) => console.log(`addClient: ${clientTap.id}: ${clientTap.lastName}`)),
      catchError(this.handleError<Client>('addClient'))
    );
  }
  updateClient(client: Client): Observable<any> {
    return this.http.put(this.clientsUrl, client, httpOptions).pipe(
      tap(res => console.log(res)),
      catchError(this.handleError<Client>(`updateClient client=${JSON.stringify(client)}`))
    );
  }

  addMainReservation(res: MainReservation): Observable<MainReservation> {
    console.log(res);
    return this.http.post<MainReservation>(this.mainReservationsUrl, res, httpOptions).pipe(
      tap(restap => console.log(restap)),
      catchError(this.handleError<MainReservation>(`addMainReservation`))
    );
  }

  serachReservationsByClientId(client_id: number): Observable<MainReservation[]> {
    const url = `${this.mainReservationsUrl}/?client_id=${client_id}`;
    return this.http.get<MainReservation[]>(url, httpOptions).pipe(
      tap(res => console.log(res)),
      catchError(this.handleError<MainReservation[]>(`searchMainReservationByClientId ${client_id}`))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error); // log to console instead
      return of(result as T);
    };
  }
}
