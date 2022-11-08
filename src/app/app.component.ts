import { Component } from '@angular/core';
import {ServicesService} from './Apiservice/services.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MastekVehicle';
  constructor(private ser:ServicesService){}
  ngOnInit(){
    this.ser.getService().subscribe((data)=>{
      // console.log(data);
      localStorage.setItem('oracleData',JSON.stringify(data));
    })
  }
}
