import { Component, OnInit, Input } from '@angular/core';
import { JourModule } from '../jour/jour.module';

@Component({
  selector: 'app-jour-item',
  templateUrl: './jour-item.component.html',
  styleUrls: ['./jour-item.component.scss']
})
export class JourItemComponent implements OnInit {

  @Input()
  jour: JourModule;

  constructor() { }

  ngOnInit(): void {
  }

}
