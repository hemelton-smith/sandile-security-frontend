import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllVehiclesComponent } from './components/all-vehicles/all-vehicles.component';
import { VehiclesNearServiceComponent } from './components/vehicles-near-service/vehicles-near-service.component';
import { VehiclesOverWarrantyComponent} from './components/vehicles-over-warranty/vehicles-over-warranty.component';

const routes: Routes = [{path: 'all-vehicles', component: AllVehiclesComponent}, {path: 'near-service', component: VehiclesNearServiceComponent}, {path: 'over-warranty', component: VehiclesOverWarrantyComponent}, { path: '**', redirectTo:'all-vehicles'}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
