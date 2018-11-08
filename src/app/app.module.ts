import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { UserDataComponent } from './user-data/user-data.component';

@NgModule({
  declarations: [AppComponent, UserDataComponent],
  imports: [BrowserModule, AppRoutingModule, ButtonsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
