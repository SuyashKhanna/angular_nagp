import { Component, OnInit } from '@angular/core';
import { CovidmetricsService } from 'src/app/core/services/covidmetrics.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-district-list',
  templateUrl: './district-list.component.html',
  styleUrls: ['./district-list.component.css']
})
export class DistrictListComponent implements OnInit {
  districtData: any
  district: string
  columnsToDisplay = ['district', 'active','confirmed','deaths','recovered'];
  constructor(private coviddataService: CovidmetricsService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.district = params["district"]
      this.coviddataService.getCovidDistrictData()
        .subscribe((result) => {
          var dataObj = result[this.district]["districtData"];
          this.districtData = Object.keys(dataObj)
                                    .map(data => {
                                      return {
                                        district : data,
                                        active : dataObj[data].active,
                                        confirmed : dataObj[data].confirmed,
                                        deceased : dataObj[data].deceased,
                                        recovered : dataObj[data].recovered
                                      }
                                    })
          console.log(this.districtData)

        });
    })
  }

}
