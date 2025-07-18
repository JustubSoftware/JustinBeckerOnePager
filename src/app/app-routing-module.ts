import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Impressum } from './impressum/impressum';
import { Datenschutz } from './datenschutz/datenschutz';

const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'impressum',
    component: Impressum
  },
  {
    path: 'datenschutz',
    component: Datenschutz
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
