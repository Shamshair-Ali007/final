import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {

  constructor(private ds: DataServiceService) { }

  ngOnInit() {
  }

  ASPassignment: any;
  
  AngularAssignment: any;

  getAspAssignments() {
    this.ds.aspAssignments().subscribe( response => { this.ASPassignment = response } );
  }

  getAngularAssignments() {
    this.ds.angularAssignments().subscribe( response => { this.AngularAssignment = response } );
  }

}
