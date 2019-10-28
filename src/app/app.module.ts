import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientService } from './services/patient.service';
import { PatientComponent } from './patient/patient.component';
import { PatientconditionComponent } from './patientcondition/patientcondition.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    PatientComponent,
    PatientconditionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatProgressSpinnerModule
    
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
