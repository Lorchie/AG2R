import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { ApiCallService } from '../../api-call.service'

@Component({
  selector: 'app-etat-plan-batch',
  templateUrl: './etat-plan-batch.component.html',
  styleUrls: ['../TDB-component.scss']
})
export class EtatPlanBatchComponent implements OnInit {

  arrayEtat:any;

  barChartOptions: ChartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    legend: {
      position: "bottom",
      labels: {
        fontSize: 4,
        padding: 1,
        boxWidth: 1,
      }
    },
    tooltips: {enabled: false},
      scales: {
        xAxes: [{
            stacked: true,
            ticks: {
              fontSize: 2
            }
        }],
        yAxes: [{
          stacked: true,
          ticks: {
            fontSize: 5,
            stepSize: 200
        }
      }]
    }
  };
  barChartLegend = true;
  barChartPlugins = [];
  barChartType: ChartType = 'bar';
  barChartLabels: Label[] = [] 
  barChartData: ChartDataSets[] = []

  @Input() metier?: string;
  @Input() zoom?: boolean;

  @Output() zoomGrapah = new EventEmitter<boolean>();

  zoomCompnent(bool:boolean) {
    this.zoomGrapah.emit(bool);
  }
  constructor(private api : ApiCallService) { }

  ngOnInit(): void {
    if(this.metier){
      this.api.getBatchPlans(this.metier).toPromise()
      .then((res)=> { 
        if(res instanceof Array){
          this.arrayEtat = res;
          res.forEach((element: any) => {
            if(element.codeApplication != "TOTAUX"){
              let t = element.codeApplication + " " + element.libApplication;
              console.log(element);
              console.log(element.codeApplication);
              this.barChartLabels.push(t);;
            }
          });
          res.forEach((element:any) => {
            if(element.codeApplication != "TOTAUX"){
              arrayEndedOk.push(element.endedOk);
              arrayWait.push(element.wait);
              arrayExecuting.push(element.executing);
              arrayEndedNotOk.push(element.endedNotOk);
            }
          });
        }
      })
      .catch;
    }

  
    let arrayEndedOk: number[] =[]
    let arrayWait: number[] =[]
    let arrayExecuting: number[] =[]
    let arrayEndedNotOk: number[] =[]

    this.barChartData = [
      
      {barThickness: 5, data: arrayEndedOk, label: 'Ended OK' },
      {barThickness: 5, data: arrayWait, label: 'Wait' },
      {barThickness: 5, data: arrayExecuting, label: 'Execution' },
      {barThickness: 5, data: arrayEndedNotOk, label: 'Ended Not OK' }
    ];  
    if(this.zoom){
      this.barChartOptions = {
        responsive: true,
        maintainAspectRatio: true,
        legend: {
          position: "bottom",
          labels: {
            fontSize: 9,
            padding: 20,
            boxWidth: 20,
          }
        },
        tooltips: {enabled: true},
        scales: {
          xAxes: [{
              stacked: true,
              ticks: {
                fontSize: 9
              }
          }],
          yAxes: [{
            stacked: true,
            ticks: {
              fontSize: 9,
              stepSize: 200
          }
        }]
      },
    }
  }
}

  public chartColors: Array<any> = [
    { // first color
      backgroundColor: '#3FA535',
      borderColor: '#3FA535',
      pointBackgroundColor: '#3FA535',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#3FA535'
    },
    { // second color
      backgroundColor: '#C6C6C6',
      borderColor: '#C6C6C6',
      pointBackgroundColor: '#C6C6C6',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#C6C6C6'
    },
    { // second color
      backgroundColor: '#FA7E35',
      borderColor: '#FA7E35',
      pointBackgroundColor: '#FA7E35',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#FA7E35'
    },
    { // second color
      backgroundColor: '#CD1719',
      borderColor: '#CD1719',
      pointBackgroundColor: '#CD1719',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: '#CD1719'
    }
  ];
}
