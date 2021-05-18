import { Component, OnInit } from '@angular/core';
import { IVehicle } from 'src/app/interfaces/Ivehicle';
import { SandileSecurityService } from 'src/app/services/sandile-security.service';

@Component({
  selector: 'app-all-vehicles',
  templateUrl: './all-vehicles.component.html',
  styleUrls: ['./all-vehicles.component.css']
})
export class AllVehiclesComponent implements OnInit {

  constructor(private service : SandileSecurityService) { }

  vehicleList: IVehicle[] = [];

  ngOnInit(): void {
    this.getAllVehicles();
  }

  getAllVehicles(){
    this.service.getAllVehicles().subscribe(data =>{
      this.vehicleList = data;
    });
  }
}
