import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { InfosPageComponent } from './infos-page/infos-page.component';
import { AgendaPageComponent } from './agenda-page/agenda-page.component';
import { MapPageComponent } from './map-page/map-page.component';
import { AdministrationComponent } from './administration/administration.component';
import { ContactPageComponent } from './contact-page/contact-page.component';


const routes: Routes = [  
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'infos',
    children: [
      {
        path: '',
        component: InfosPageComponent
      },
      {
        path: 'agenda',
        component: AgendaPageComponent
      },
      {
        path: 'contact',
        component: ContactPageComponent
      },
      {
        path: 'map',
        component: MapPageComponent
      }
    ],
  },
  {
    path: 'administration',
    component: AdministrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
