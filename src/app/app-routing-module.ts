import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { Impressum } from './impressum/impressum';
import { Datenschutz } from './datenschutz/datenschutz';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

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
  },
];

const routerOptions: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }
