import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {
  public oracleData: any;
  public username:any;
  public CategoryCode:any;
  public CategoryName:any;
  vehicledata=[];
  public Data:any;
  constructor() { }

  ngOnInit(): void {

  }

  clickEvent()
  {
    this.oracleData = localStorage.getItem('oracleData')
    this.oracleData = JSON.parse(this.oracleData)
    console.log(this.oracleData)
    for (let i = 0; i < this.oracleData.items.length; i++) {
      console.log(this.username)
      if(this.username == this.oracleData.items[i].AnnouncementId){
          this.CategoryCode = this.oracleData.items[i].CategoryCode
          this.CategoryName = this.oracleData.items[i].CategoryName
      }
    }



  }

}
