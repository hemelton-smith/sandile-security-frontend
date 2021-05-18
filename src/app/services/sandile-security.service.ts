import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { IVehicle } from '../interfaces/Ivehicle';

@Injectable({
  providedIn: 'root'
})
export class SandileSecurityService {

  constructor(private httpClient: HttpClient) { }
  readonly baseUrl = environment.baseUrl;
  getAllVehicles():Observable<IVehicle[]>{
    return this.httpClient.get<IVehicle[]>(`${this.baseUrl}/api/getallvehicles`);
  }

  getVehiclesNearService():Observable<IVehicle[]>{
    return this.httpClient.get<IVehicle[]>(`${this.baseUrl}/api/vehiclesnearservice`);
  }

  getVehiclesOverWarranty():Observable<IVehicle[]>{
    return this.httpClient.get<IVehicle[]>(`${this.baseUrl}/api/getvehicleaoverwarranty`);
  }
}
