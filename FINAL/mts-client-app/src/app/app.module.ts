import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { TxrFormComponent } from './txr-form/txr-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StatusComponent } from './status/status.component';
import { TxrService } from './txr.service'

const routes: Routes = [
  {path: 'txr-form', component: TxrFormComponent},
  {path: 'status', component: StatusComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TxrFormComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [TxrService],
  bootstrap: [AppComponent]
})
export class AppModule {}
