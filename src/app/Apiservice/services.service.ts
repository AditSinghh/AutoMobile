import { Injectable } from '@angular/core';
import {HttpClient}   from  '@angular/common/http'
import { Vehicledata } from '../vehicledata';
// import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
url="http://localhost:4000/testOracleapiget"
  constructor(private http: HttpClient) {}
  getService()

  // getData(): Observable<Vehicledata[]> {

  {
    return this.http.get(this.url);

  }

  }
