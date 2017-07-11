import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { PmModule } from './pm/pm.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PmModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
