import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private http: HttpClient) { }

  getPatientData() {
    return this.http.get<any>('https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Patient/1316024');
  }

  getPatientConds() {
    return this.http.get<any>("https://fhir-open.sandboxcerner.com/dstu2/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/Condition?patient=1316024").pipe(
      map(data => {
        return data.entry.map(cond => ({
          conditionName: cond.resource.code.text,
          dateRecorded: cond.resource.dateRecorded,
          link: `https://www.ncbi.nlm.nih.gov/pubmed/?term=${encodeURI(cond.resource.code.text)}`
        }))
      })
    );
  }
}
