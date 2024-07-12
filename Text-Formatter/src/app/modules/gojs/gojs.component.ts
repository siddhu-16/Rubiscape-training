import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';
import { color } from 'highcharts';

const $ = go.GraphObject.make

@Component({
  selector: 'app-gojs',
  templateUrl: './gojs.component.html',
  styleUrls: ['./gojs.component.css']
})
export class GojsComponent implements OnInit {


  

  constructor() { }

  ngOnInit(): void {


  }
  ngAfterViewInit(){
    var myDigram = $(go.Diagram , "gojs");
    var nodeData = [
      {text:"Rubiscape", key:"A" ,color:'red',textcolor: "white", textstyle:'bold 14pt calibiri'},
      {text:"RubiStudio", key:"C" ,color:'orange' ,textcolor:"black", textstyle:'bold 14pt calibiri'},
      {text:"Rubisight", key: "D",color:'orange',textcolor:"black" , textstyle:'bold 14pt calibiri'},
      {text:"Rubiconnect", key:"B" , color:"orange",textcolor:"black", textstyle:'bold 14pt calibiri'},
      {text:"Workflows", key:"E" ,color:'#DCDCDC' ,textcolor:"black",nodeshape:"RoundedRectangle", textstyle:' 14pt calibiri'},
      {text:"workbook", key:"F" ,color:'#DCDCDC' ,textcolor:"black",nodeshape:"RoundedRectangle", textstyle:' 14pt calibiri'},
      {text:"dashboard", key: "G",color:'#DCDCDC' ,textcolor:"black",nodeshape:"RoundedRectangle", textstyle:' 14pt calibiri'},
      {text:"models" ,key:"H" ,color:'white' ,textcolor:"black" , nodeshape:"Ellipse", textstyle:' 14pt calibiri'},
      {text:"reusable code", key:"I" ,color:'white',textcolor: "black", nodeshape:"Diamond",swidth:1, textstyle:' 14pt calibiri'},
    ];
    var linkData = [
      {from: "A",to: "B", color:"#ff00ff", widhth:3},
      {from: "A",to: "C" , color:"#ff00ff", widhth:3},
      {from: "A",to: "D" , color:"#ff00ff", widhth:3},
      {from: "C",to: "E" , color:"red", widhth:2,arrow:''},
      {from: "C",to: "F" , color:"red", widhth:2},
      {from: "D",to: "G" , color:"blue", widhth:2},
      {from: "F",to: "I" , color:"black", widhth:1},
  

    ];
    myDigram.model = new go.GraphLinksModel(nodeData, linkData);

    myDigram.nodeTemplate = $(go.Node, 'Auto',
      $(go.Shape, {figure:'Rectangle'}, {fill:'white'},{strokeWidth:1},
        new go.Binding("fill" , 'color'),
        new go.Binding("figure" , 'nodeshape'),
        new go.Binding("strokewidth" , 'swidth'),
        new go.Binding("location","loc")
      ),

      $(go.TextBlock, 'text',{margin:8,},
        new go.Binding('text','text'),
        new go.Binding('stroke','textcolor'),
        new go.Binding('font','textstyle'),
        
      )
    );
    myDigram.linkTemplate = 
      $(go.Link, 
        $(go.Shape, {strokeWidth:2},
          new go.Binding('stroke', 'color'),
          new go.Binding('strokeWidth', 'width'),
        ),
        $(go.Shape, {toArrow: 'Standard', stroke: null},
          new go.Binding('fill' ,'color'),
          new go.Binding('toArrow' ,'arrow'),
        )
    )

    myDigram.layout = $(go.TreeLayout ,
      {
        angle: 90
      },
      
    )
  }
}

