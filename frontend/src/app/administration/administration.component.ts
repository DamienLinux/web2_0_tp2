import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {

  constructor(private formBuilder : FormBuilder, private appComponent : AppComponent) { }

  form: FormGroup;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      identifiant: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit() : void {
    this.appComponent.seConnecte();
  }

  getComponent() : AppComponent {
    return this.appComponent;
  }
}
