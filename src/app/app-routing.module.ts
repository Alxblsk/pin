import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PinsListComponent } from './pins-list/pins-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/pins',
    pathMatch: 'full'
  },
  {
    path: 'pins',
    component: PinsListComponent
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}
