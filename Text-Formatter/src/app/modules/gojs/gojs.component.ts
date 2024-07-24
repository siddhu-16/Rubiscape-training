import { Component, OnInit } from '@angular/core';
import * as go from 'gojs';

const $ = go.GraphObject.make;

@Component({
  selector: 'app-gojs',
  templateUrl: './gojs.component.html',
  styleUrls: ['./gojs.component.css']
})
export class GojsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit() {


    var myDiagram = $(go.Diagram, "gojs",
      { layout: new go.TreeLayout({ angle: 90, layerSpacing: 35 })}
    );  
    
    var nodeData = [
      { text: "Rubiscape", key: "A", color: 'red', textcolor: "white", textstyle: 'bold 14pt calibiri' },
      { text: "RubiStudio", key: "C", color: 'orange', textcolor: "black", textstyle: 'bold 14pt calibiri' },
      { text: "Rubisight", key: "D", color: 'orange', textcolor: "black", textstyle: 'bold 14pt calibiri' },
      { text: "Rubiconnect", key: "B", color: "orange", textcolor: "black", textstyle: 'bold 14pt calibiri' },
      { text: "Workflows", key: "E", color: '#DCDCDC', textcolor: "black", nodeshape: "RoundedRectangle", textstyle: '14pt calibiri' },
      { text: "Workbook", key: "F", color: '#DCDCDC', textcolor: "black", nodeshape: "RoundedRectangle", textstyle: '14pt calibiri' },
      { text: "Dashboard", key: "G", color: '#DCDCDC', textcolor: "black", nodeshape: "RoundedRectangle", textstyle: '14pt calibiri' },
      { text: "Models", key: "H", color: 'white', textcolor: "black", nodeshape: "Ellipse", textstyle: '14pt calibiri', loc: "75 100" },
      { text: "Reusable Code", key: "I", color: 'white', textcolor: "black", nodeshape: "Diamond", swidth: 1, textstyle: '14pt calibiri' }
    ];
    
    var linkData = [
      { from: "A", to: "B", color: "#ff00ff", width: 3 },
      { from: "A", to: "C", color: "#ff00ff", width: 3 },
      { from: "A", to: "D", color: "#ff00ff", width: 3 },
      { from: "C", to: "E", color: "red", width: 2 },
      { from: "C", to: "F", color: "red", width: 2 },
      { from: "D", to: "G", color: "blue", width: 2 },
      { from: "F", to: "I", color: "black", width: 1 },
      { from: "E", to: "H", color: "black", width: 1 },
      { from: "F", to: "H", color: "black", width: 1 },
    ];
    
    myDiagram.model = new go.GraphLinksModel(nodeData, linkData);
    
    myDiagram.nodeTemplate = $(go.Node, 'Auto',
      $(go.Shape, { figure: 'Rectangle' }, { fill: 'white' }, { strokeWidth: 1 },
        new go.Binding("fill", 'color'),
        new go.Binding("figure", 'nodeshape'),
        new go.Binding("strokeWidth", 'swidth')
        
      ),
      $(go.TextBlock, 'text', { margin: 8 },
        new go.Binding('text', 'text'),
        new go.Binding('stroke', 'textcolor'),
        new go.Binding('font', 'textstyle')
      )
    );

    myDiagram.linkTemplate =
      $(go.Link,
        {
          curve:go.Link.Bezier,
          curviness : 20
        },
        
        $(go.Shape, { strokeWidth: 2 },
          new go.Binding('stroke', 'color'),
          new go.Binding('strokeWidth', 'width'),
          
        ),
        $(go.Shape, { toArrow: 'Standard', stroke: null },
          new go.Binding('fill', 'color'),
          new go.Binding('toArrow', 'arrow'),
        )
      );

      

    // myDiagram.layout = $(go.TreeLayout,
    //   {
    //     angle: 90
    //   }
    // );
  }
}
