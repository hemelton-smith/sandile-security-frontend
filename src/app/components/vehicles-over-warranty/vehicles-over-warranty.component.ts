import { Component, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/interfaces/Ivehicle';
import { SandileSecurityService } from 'src/app/services/sandile-security.service';

@Component({
  selector: 'app-vehicles-over-warranty',
  templateUrl: './vehicles-over-warranty.component.html',
  styleUrls: ['./vehicles-over-warranty.component.css']
})
export class VehiclesOverWarrantyComponent implements OnInit {

  constructor(private service : SandileSecurityService) { }

  vehicleList: IVehicle[] = [];

  ngOnInit(): void {
    this.getAllVehicles();
  }

  getAllVehicles(){
    this.service.getVehiclesOverWarranty().subscribe(data =>{
      this.vehicleList = data;
    });
  }
}
