import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor(private ds: DataServiceService) { }

  ngOnInit() {
  }

  ASPresult: any;
  Webresult: any;
  MobileResult: any;
  getASPInfo() {
    this.ds.aspInfo().subscribe( response => { this.ASPresult = response } );
  }
  getMobileInfo(){
    this.ds.mobileInfo().subscribe( response => { this.MobileResult = response } );
  }
  getWebInfo() {
    this.ds.webInfo().subscribe( response => { this.Webresult = response } );
  }

}
