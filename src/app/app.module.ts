import { AppRoutingModule } from './app-routing/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data-service';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { ClientDetailsComponent } from './client-details/client-details.component';
import { ClientSearchComponent } from './client-search/client-search.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ClientDetailsComponent,
    ClientSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
