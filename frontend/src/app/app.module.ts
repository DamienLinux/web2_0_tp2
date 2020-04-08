import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { InfosPageComponent } from './infos-page/infos-page.component'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { AgendaPageComponent } from './agenda-page/agenda-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { MapPageComponent } from './map-page/map-page.component'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatButtonModule} from '@angular/material/button'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JourItemComponent } from './agenda-page/jour-item/jour-item.component';
import { EventsComponent } from './agenda-page/jour-item/events/events.component';
import { AdministrationComponent } from './administration/administration.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    InfosPageComponent,
    AgendaPageComponent,
    ContactPageComponent,
    MapPageComponent,
    JourItemComponent,
    EventsComponent,
    AdministrationComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Angular Material
    MatToolbarModule,
    MatMenuModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
