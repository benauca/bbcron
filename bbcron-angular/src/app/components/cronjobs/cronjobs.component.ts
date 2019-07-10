import { Component, OnInit } from '@angular/core';
import { CronJobService } from './../../services/cronjob.service';
import { CronJob } from './../../services/cronjob.service';

@Component({
  selector: 'app-cronjobs',
  templateUrl: './cronjobs.component.html',
  styleUrls: ['./cronjobs.component.css']
})
export class CronjobsComponent implements OnInit {
  calendar = new Date();
  cronJobs: CronJob[];
  private columns:Column[]  = [
    {name: 'id' },
    {name: 'Name'},
    {name: 'Expression'},
    {name: 'URL to Call'},
    {name: 'Eng.'},
    //Numero total de ejecuciones satisfactorias
    {name: 'TS'},
    //Numero total de ejecuciones fallidas
    {name: 'TF'},
    // number of consecutive failed executions (CF))
    {name: 'CF'},
    {name: 'Email Me'},
    {name: 'Logs & Predictions'},
    {name: 'Status'},
    {name: 'Actions'}
  ] ;
  constructor(private _serviceCron: CronJobService) { }

  ngOnInit() {
    this.cronJobs = this._serviceCron.getCronJobs();
  }

}


export interface Column  {
  name:string;
}
