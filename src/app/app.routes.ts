import { Routes } from '@angular/router';
import { Ligne101Component } from './components/ligne-101/ligne-101.component';
import { HomeComponent } from './components/home/home.component';
import { InterestComponent } from './components/interest/interest.component';

export const routes: Routes = [
  { path: 'test', component: Ligne101Component },
  { path: '', component: HomeComponent },
  { path: 'ligne/:id/arret/:arretId', component: InterestComponent },
];
