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
  PHPresult: any;
  Webresult: any;
  getASPInfo() {
    this.ds.aspInfo().subscribe( response => { this.ASPresult = response } );
  }

  getPHPinfo() {
    this.ds.phpInfo().subscribe( response => { this.PHPresult = response } );
  }

  getWebInfo() {
    this.ds.webInfo().subscribe( response => { this.Webresult = response } );
  }

}
