import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { PatientconditionDataSource, PatientconditionItem } from './patientcondition-datasource';
import { PatientService } from '../services/patient.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';

export interface Condition {
  conditionName: string;
  dataRecorded: Date;
  link: string;
}

@Component({
  selector: 'app-patientcondition',
  templateUrl: './patientcondition.component.html',
  styleUrls: ['./patientcondition.component.css'],
})
export class PatientconditionComponent implements OnInit {
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatTable, {static: false}) table: MatTable<PatientconditionItem>;


  private patientSubs: Subscription;

  displayedColumns: string[] = ['conditionName', 'dateRecorded', 'link'];
  dataSource: MatTableDataSource<Condition>;
  isLoading = true;

  constructor(private _patientService:PatientService){ }

  ngOnInit() {
    this.patientSubs = this._patientService.getPatientConds().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.isLoading = false;
    });
  }
  
  ngOnDestroy() {
    this.patientSubs.unsubscribe();
  }
}
