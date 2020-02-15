import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PinsListComponent } from './pins-list/pins-list.component';
import { PinsListItemComponent } from './pins-list-item/pins-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PinsListComponent,
    PinsListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
