import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) { }

  aspInfo() {
    return this.http.get("http://www.mocky.io/v2/5c7ce57b100000d11b760cb4");
  }

  mobileInfo(){
    return this.http.get("http://www.mocky.io/v2/5c7cc914100000f614760bce");
  }
  webInfo() {
    return this.http.get("http://www.mocky.io/v2/5c7cc8e5100000d415760bcc");
  }

  aspAssignments() {
    return this.http.get("http://www.mocky.io/v2/5c7bb9a62f0000e113e59f66");
  }

  mobileAssignments() {
    return this.http.get("http://www.mocky.io/v2/5c7ce38f1000005815760c93");
  }

  angularAssignments() {
    return this.http.get("http://www.mocky.io/v2/5c7ce4221000005815760ca1");
  }

}
