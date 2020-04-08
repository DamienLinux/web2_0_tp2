import { Component, OnInit, Input } from '@angular/core';
import { HorairesModule } from '../../horaires/horaires.module';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  @Input()
  event: HorairesModule

  constructor() { }

  ngOnInit(): void {
  }

}
