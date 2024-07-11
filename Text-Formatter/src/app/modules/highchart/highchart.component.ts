import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';


@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit {

  initialMsg : any
   show = false
  options : any;
  data = [10,20,30,40,50];

  Highcharts: typeof Highcharts = Highcharts;

  displayCharts(btn: string) {
    this.show = true
    switch (btn) {
      case 'pie':
        Highcharts.chart('container', {
          chart: {
              type: 'pie'
          },
          title: {
              text: 'Egg Yolk Composition'
          },
          tooltip: {
              valueSuffix: 'percentage'
          },
          
          plotOptions: {
              series: {
                  allowPointSelect: true,
                  cursor: 'pointer',
                  dataLabels: [ {
                      enabled: true,
                      distance: -40,
                      // format: '{point.percentage:.1f}%',
                      style: {
                          fontSize: '1.2em',
                          textOutline: 'none',
                          opacity: 0.7
                      },
                      filter: {
                          operator: '>',
                          property: 'percentage',
                          value: 10
                      }
                  }]
              } as any
          },
          series: [
              {
                  name: 'Percentage',
                  colorByPoint: true,
                  data: [
                      {
                          name: 'Water',
                          y: 20,
                          
                      },
                      {
                          name: 'Fat',
                          y: 20
                      },
                      {
                          name: 'Carbohydrates',
                          y: 20
                      },
                      {
                          name: 'Protein',
                          y: 20
                      },
                      {
                          name: 'Ash',
                          y: 20
                      }
                  ]
              }
          ] as any
      });

        break;
      case 'column':
        Highcharts.chart('container',{
          chart: {
            type: 'column'
        },
        title: {
            text: 'Accidnt rates in various states',
            align: 'center'
        },
        
        xAxis: {
          categories: ['2022', '2023', '2024'],
          crosshair: true,
          // accessibility: {
          //     description: 'Countries'
          // }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of accidents per year'
            }
        },
        series: [
          {
              name: 'Maharastra',
              data: [750, 680, 476]
          },
          {
              name: 'Goa',
              data: [580, 660, 876]
          },
          {
              name: 'UP',
              data: [798, 673, 387]
          }
      ] as any
        })
        break;

      case 'line':
        Highcharts.chart('container',{
          title:{
            text: 'Solar Employment Growth',
            align: 'center'
          },
          yAxis:{
            title:{
              text: 'Number of Employees'
            }
          },
          xAxis:{
            title:{
              text: 'years'
            }
            // },
            // accessibility:{
            //   rangeDescription :'Range:2016 to 2020'
            // }
          },
          legend: {
            layout: 'vertical',
            align: 'right',
            verticalAlign: 'middle'
          },
          plotOptions: {
            series: {
                label: {
                    connectorAllowed: true
                },
                pointStart: 2010
            }
        },
        series:[{
          name: 'Sunrun',
          data: [10, 17, 15, 14, 12, 9]
        },
        {
          name: 'DJ',
          data: [14, 7, 5, 19, 21, 24]
        },
        {
          name: 'SolarCity',
          data: [1, 3, 20, 11, 17, 19]
        }
        ] as any,
        
        })
        break;

      case 'tree':

    Highcharts.chart('container', {
        
        series: [{

            type: 'treemap',
            layoutAlgorithm: 'squarified',
          
            data: [{
                name: 'A',
                value: 6,
                
            }, {
                name: 'B',
                value: 6,
                
            }, {
                name: 'C',
                value: 4,
                
            }, {
                name: 'D',
                value: 3,
                
            }, {
                name: 'E',
                value: 2,
                
            }, {
                name: 'F',
                value: 2,
                
            }, {
                name: 'G',
                value: 1,
                
            }]
        }],
        title: {
            text: 'Treemap'
        }
    });
        break;

      case 'area':

        Highcharts.chart('container',{
          series: [
            {
              type: 'area',
              data: this.data
            },
          ],
        })
        break;
      case 'stacked':
       
        Highcharts.chart('container', {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Ferry passengers by vehicle type 2024'
          },
          xAxis: {
              categories: [
                  'January', 'February', 'March', 'April', 'May'
              ]
          },
          yAxis: {
              min: 0,
              title: {
                  text: ''
              }
          },
          legend: {
              reversed: true
          },
          plotOptions: {
              series: {
                  stacking: 'normal',
                  dataLabels: {
                      enabled: true
                  }
              }
          },
          series: [{
              name: 'Motorcycles',
              data: [74, 27, 52, 93, 1272]
          }, {
              name: 'Null-emission vehicles',
              data: [2106, 2398, 3046, 3195, 4916]
          }, {
              name: 'Conventional vehicles',
              data: [12213, 12721, 15242, 16518, 25037]
          }] as any
        });

        break;
    
      
    }

  }


  
 
  constructor() { }

  ngOnInit(): void {
    
  }
  

}
