import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import TreemapModule from 'highcharts/modules/treemap';

TreemapModule(Highcharts);

@Component({
  selector: 'app-highchart',
  templateUrl: './highchart.component.html',
  styleUrls: ['./highchart.component.css']
})
export class HighchartComponent implements OnInit {

 
   show = false
 

  
  displayCharts(btn: string) {
    this.show = true
    switch (btn) {
      case 'pie':
        this.showPie()

        break;
      case 'column':
          this.showColumn()
        break;

      case 'line':
          this.showLine()
        break;

      case 'tree':
        this.showTree()
        break;

      case 'area':
      this.showArea()
        break;

      case 'stacked':
        this.showStacked()
      break;
    
      
    }

  }


  
 
  constructor() { }

  ngOnInit(): void {
    
  }

  showColumn(){
    Highcharts.chart('container',{
      chart: {
        type: 'column',
        
    },
    title: {
        text: 'Accidnt rates in various states',
        align: 'center'
    },
    
    xAxis: {
      categories: ['2022', '2023', '2024'],
      crosshair: true,
      accessibility: {
          description: 'Countries'
      }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of accidents per year',
            
        }
    },
    plotOptions: {
      column: {
            pointPadding: 0.2,
            borderWidth: 0
        },
      series:{
        showInLegend: false,
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
  }

  showLine(){
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

      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
      },
      plotOptions: {
        line:{
          dataLabels:{
            enabled: true
          }
        },
        series: {
            label: {
                connectorAllowed: true,
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
  }
  showArea(){
    
      Highcharts.chart('container', {
        chart: {
          type: 'area'
        },
        title: {
          text: 'Company Performance Over Years'
        },
        xAxis: {
          accessibility: {
            rangeDescription: 'Range: 2000 to 2024.'
          },
          categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
          
        },
        yAxis: {
          title: {
            text: 'Revenue (in millions)',
            align: 'high'
          }
        },
        tooltip: {
          pointFormat: '{series.name} had a revenue of <b>{point.y:,.0f}</b><br/>million in {point.x}'
        },
        plotOptions: {
          area: {
            marker: {
              enabled: false,
              symbol: 'circle',
              radius: 2,
              states: {
                hover: {
                  enabled: true
                }
              }
            }
          }
        },
        series: [
          {
            name: 'Company A',
            data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200, 210]
          },
          {
            name: 'Company B',
            data: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 120, 125]
          },
          {
            name: 'Company C',
            data: [8, 12, 16, 22, 28, 34, 38, 44, 48, 56, 64, 72, 80, 88, 96, 104, 112, 120, 128, 136, 144, 152, 160, 168, 176]
          }
        ] as any
      });
    
    
  }
  showTree(){
    Highcharts.chart('container', {
      chart: {
        type: 'treemap'
      },
      plotOptions:{
      
      },
      series: [{
        type: 'treemap',
        layoutAlgorithm: 'sliceAndDice',
        data: [
          { name: 'Apples', value: 7 },
          { name: 'Bananas', value: 4 },
          { name: 'Cherries', value: 3 },
          { name: 'Dates', value: 2 },
          { name: 'Elderberries', value: 2 },
          { name: 'Grapes', value: 4 },
          { name: 'Almonds', value: 1 }
        ],
        dataLabels:{
          enabled: true
        }
      }],
      title: {
        text: 'Treemap'
      }
    });
  
  }
  showPie(){
    Highcharts.chart('container', {
      chart: {
          type: 'pie',
          backgroundColor:'#f2f2f2'
      },
      title: {
          text: 'Students Interest in Egineering'
      },
      tooltip: {
          valueSuffix: '%'
      },
      
      plotOptions: {
          series: {
              allowPointSelect: true,
              showInLegend: true,
              cursor: 'pointer',
              dataLabels: [ {
                  enabled: true,
                  distance: -40,
                  format: '<b>{point.name}:</b> {point.percentage:.1f}  ',
                  style: {
                      fontSize: '1.2em',
                      textOutline: 'none',
                      opacity: 0.1,
                  },
                  
                 
              }]
          } as any
      },
      series: [
          {
              name: '%',
              colorByPoint: true,
              data: [
                  {
                    
                      name: 'CSE',
                      y: 40,
                      
                  },
                  {
                      name: 'AI',
                      y: 20
                  },
                  {
                      name: 'E&TC',
                      y: 20
                  },
                  {
                      name: 'MECH',
                      y: 10
                  },
                  {
                      name: 'CIVIL',
                      y: 10 
                  }
              ]
          }
      ] as any
  });
  }
  showStacked(){
    Highcharts.chart('container', {
      chart: {
          type: 'bar'
      },
      title: {
          text: 'Number of vehicles sold in 2024'
      },
      xAxis: {
          categories: [
              'January', 'February', 'March', 'April', 'May'
          ]
      },
      yAxis: {
          min: 0,
          
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
          name: 'Tata',
          data: [1074, 1827, 2052, 1093, 7272],
          color: '#FF0000'
      }, {
          name: 'Mahindra',
          data: [2166, 2298, 3646, 3695, 3916],
          color: '#FFA500'
      }, {
          name: 'Bajaj',
          data: [1213, 12121, 15142, 18518, 2037],
          color: '#FFFF00'
      }] as any
    });
  }
}
