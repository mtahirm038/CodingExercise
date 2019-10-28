import { Component, OnInit, OnDestroy } from '@angular/core';
import { PatientService } from '../services/patient.service';
import { Subscription } from 'rxjs';

export interface Patient {
  name: string;
  gender: Date;
  dob: string;
}

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit, OnDestroy {

  patient: Patient;

  private patientSub: Subscription;

  constructor(private _patientService: PatientService) { }

  ngOnInit() {
    this.patientSub = this._patientService.getPatientData().subscribe(data => {
      this.patient = {
        name: data.name[0].text,
        gender: data.gender,
        dob: data.birthDate
      };
    });
  }

  ngOnDestroy() {
    this.patientSub.unsubscribe();
  }

}

