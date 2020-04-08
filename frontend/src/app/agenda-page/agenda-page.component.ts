import { Component, OnInit } from '@angular/core';
import { HorairesModule } from './horaires/horaires.module';
import { JourModule } from './jour/jour.module';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-agenda-page',
  templateUrl: './agenda-page.component.html',
  styleUrls: ['./agenda-page.component.scss']
})
export class AgendaPageComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }

  semaine : JourModule[];

  ngOnInit(): void {
    this.updateSemaine();
  }

  updateSemaine() : void  {
    this.httpClient.get<JourModule[]>('http://localhost:8090/horaires').subscribe(datas => {
      this.semaine = datas;
    });
  }
}
