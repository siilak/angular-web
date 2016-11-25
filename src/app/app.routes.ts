import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { NopaymentComponent } from './nopayment';
import { TeliaComponent } from './telia';
import { TeliasmsComponent } from './teliasms';
import { TeliasorryComponent } from './teliasorry';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';


export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'nopayment', component: NopaymentComponent },
  { path: 'telia', component: TeliaComponent },
  { path: 'teliasms', component: TeliasmsComponent },
  { path: 'teliasorry', component: TeliasorryComponent },
  {
    path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
      return comp.default;
    })
    ,
  },
  { path: '**',    component: NoContentComponent },
];
