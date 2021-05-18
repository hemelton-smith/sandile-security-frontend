import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AllVehiclesComponent } from './components/all-vehicles/all-vehicles.component';
import { VehiclesNearServiceComponent } from './components/vehicles-near-service/vehicles-near-service.component';
import { VehiclesOverWarrantyComponent } from './components/vehicles-over-warranty/vehicles-over-warranty.component';

import { HttpClientModule } from '@angular/common/http';

import { SpinnerComponent } from './components/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AllVehiclesComponent,
    VehiclesNearServiceComponent,
    VehiclesOverWarrantyComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
