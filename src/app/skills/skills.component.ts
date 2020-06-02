import { Component, OnInit } from '@angular/core';
import { ChartOptions } from 'chart.js';

import { SingleDataSet, Label } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  //variables
  tituloSkill:string
 
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    animation:{
      duration: 2000,
      easing: 'easeInOutCubic'
    }
  };
  public pieChartLabels:string[] = ['HTML', 'CSS', 'JAVASCRIPT','BACK-END','CMS', 'OTHER'];
  public pieChartData:number[] = [13.3, 13.3, 11.6 , 11.6,8.3,10];
  public pieChartType:string = 'pie';
  public pieChartLegend = false;
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.4)', 'rgb(0, 171, 255)', 'rgba(0,0,255,0.4)', 'rgba(255,0,255,0.4)', 'rgba(0,255,255,0.4)', 'rgba(255,255,255,0.4)'],
      borderWidth:1,
    },
  ];

    // PolarArea
    public polarAreaChartLabels: Label[] = ['HTML', 'CSS', 'JAVASCRIPT','BACK-END','CMS', 'OTHERS'];
    public polarAreaChartData: SingleDataSet = [13.3, 13.3, 11.6 , 11.6,8.3,10];
    public polarAreaLegend = false;
    public polarAreaChartType: ChartType = 'polarArea';
    public polarChartColors = [
      {
        backgroundColor: ['rgba(255,0,0,0.4)', 'rgba(251, 130, 1, 0.57)', 'rgba(0,0,255,0.4)', 'rgba(255,0,255,0.4)', 'rgba(0,255,255,0.4)', 'rgba(132, 255, 9, 0.4)'],
        borderWidth:0,
      },
    ];

    view:number=-1;
    skills:any[] = [
      {
        tituloSkill: this.polarAreaChartLabels[0],
        subtituloSkill: 'HTML5'
      },
      {
        tituloSkill: this.polarAreaChartLabels[1],
        subtituloSkill: ['CSS3', 'SASS', 'BOOTSTRAP', 'MATERIALIZE']
      },
      {
        tituloSkill: this.polarAreaChartLabels[2],
        subtituloSkill: ['JAVASCRIPT', 'ANGULAR', 'IONIC', 'REACT']
      },
      {
        tituloSkill: this.polarAreaChartLabels[3],
        subtituloSkill: ['MYSQL', 'POSTGRESTQL', 'MONGODB','NODE']
      },
      {
        tituloSkill:this.polarAreaChartLabels[4],
        subtituloSkill: 'WORDPRESS'
      },
      {
        tituloSkill:this.polarAreaChartLabels[5],
        subtituloSkill: ['GITHUB', 'GITLAB', 'HEROKU', 'GITHUB PAGES']
      }
    ];
  

  constructor() { }

  ngOnInit(): void {
  }

  // events
  public chartClicked(e:any):void {
    //console.log(e.active[0]._index);
    this.view = e.active[0]._index;
  }
   

}
