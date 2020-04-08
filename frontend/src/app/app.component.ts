import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private router: Router) {}

  title = 'tp1-exemple';
  private connecte : Boolean = false;

  getConnecte() : Boolean {
    return this.connecte;
  }

  seConnecte() : void {
    this.connecte = true;
    this.router.navigate(["/", 'home']);
  }

  seDeconnecte() : void {
    this.connecte = false;
    this.router.navigate(["/", 'administration']);
  }
}

