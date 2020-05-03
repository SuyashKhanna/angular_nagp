import { Component, OnInit } from '@angular/core';
import { IStateDataList } from 'src/app/core/interfaces/IStateDataList';
import { CovidmetricsService } from 'src/app/core/services/covidmetrics.service';

@Component({
  selector: 'app-state-list',
  templateUrl: './state-list.component.html',
  styleUrls: ['./state-list.component.css']
})
export class StateListComponent implements OnInit {

  stateData : IStateDataList
  columnsToDisplay = ['state', 'active','confirmed','deaths','recovered'];
  constructor(private coviddataService : CovidmetricsService) { }

  ngOnInit(): void {
    this.coviddataService.getCovidStateWiseData()
                         .subscribe((result) => {
                           this.stateData = result
                         });
  }
}
