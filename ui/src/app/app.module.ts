import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModulesPro } from 'ng-uikit-pro-standard';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {SharedModule} from './shared/shared.module';
import {HomeModule} from './home/home.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MDBBootstrapModulesPro.forRoot(),
    SharedModule,
    HomeModule
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
