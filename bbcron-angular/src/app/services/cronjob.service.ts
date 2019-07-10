// Va a ser el servicio que se logue contra el modelo de datos
import { Injectable } from '@angular/core';

//Servicio que nos da información de los heroes.
@Injectable()
export class CronJobService {

  public cronjobs: CronJob[] = [
    {
      id: 0,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'M', 'R', 'D']
    },{
      id: 1,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'M', 'R', 'D']
    }, {
      id: 2,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'R', 'M']
    },{
      id: 3,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'R', 'D']
    },
    {
      id: 4,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'M', 'R', 'D']
    },{
      id: 5,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'M', 'R', 'D']
    }, {
      id: 6,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'R', 'D']
    },{
      id: 7,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'R', 'D']
    },
    {
      id: 8,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'R', 'D']
    },{
      id: 9,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'R', 'D']
    }, {
      id: 10,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'R', 'D']
    },{
      id: 11,
      name: "generate thumbnails",
      expression: "0/2 * * * *",
      url2Call: "http://example.com/bbcron/cron/genateThumbs",
      engines: 536,
      ts: 24892,
      tf: 12,
      cf: 8,
      emailMe: "after ejecution",
      logs: "logs",
      status: 1,
      action: ['E', 'C', 'R', 'D']
    }

  ];

  constructor() {
    console.log("Servicio listo para Usar!!!");
  }

  /**
   * Devuelve la lista de los CronJobs configurados.
   */
  public getCronJobs() {
    return this.cronjobs;
  }

  /**
   * Devuelve el detalle del CronJob por posicion
   */
  public getCronJob(index: number){
    return this.cronjobs[index];
  }
}

/**
 *  Cronjob
 */
export interface CronJob {
  id: number;
  name: string;
  expression: string;
  url2Call: string;
  engines: number;
  ts: number;
  tf: number;
  cf: number;
  emailMe: string;
  logs: string;
  status: number;
  action: string[];
}
