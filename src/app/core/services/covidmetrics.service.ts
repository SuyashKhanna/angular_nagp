import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashboardModule } from 'src/app/dashboard/dashboard.module';
import { IStateDataList } from '../interfaces/IStateDataList';

@Injectable({
  providedIn: 'root'
})
export class CovidmetricsService {

  covidDataBaseUrl = "https://api.covid19india.org";

  constructor(private http: HttpClient) { }

  getCovidStateWiseData(){
    let url = this.covidDataBaseUrl + "/data.json";
    return this.http.get<IStateDataList>(url);
  }

  getCovidDistrictData(){
    let url = this.covidDataBaseUrl + "/state_district_wise.json";
    return this.http.get(url);
  }
}
