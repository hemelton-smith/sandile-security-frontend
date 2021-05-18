import { Component, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/interfaces/Ivehicle';
import { SandileSecurityService } from 'src/app/services/sandile-security.service';

@Component({
  selector: 'app-vehicles-near-service',
  templateUrl: './vehicles-near-service.component.html',
  styleUrls: ['./vehicles-near-service.component.css']
})
export class VehiclesNearServiceComponent implements OnInit {

  constructor(private service : SandileSecurityService) { }

  vehicleList: IVehicle[] = [];

  ngOnInit(): void {
    this.getAllVehicles();
  }

  getAllVehicles(){
    this.service.getVehiclesNearService().subscribe(data =>{
      this.vehicleList = data;
    });
  }
}
