import {AfterViewInit, Component, OnInit} from '@angular/core';
import ArrayStore from "devextreme/data/array_store";
import {DiagramService} from "../services/diagram.service";

@Component({
  selector: 'app-my-diagram',
  templateUrl: './my-diagram.component.html',
  styleUrls: ['./my-diagram.component.scss'],
  preserveWhitespaces: true
})
export class MyDiagramComponent implements OnInit, AfterViewInit {

  flowNodesDataSource: ArrayStore;
  flowEdgesDataSource: ArrayStore;

  constructor(public service: DiagramService) {
    this.flowNodesDataSource = new ArrayStore({
      key: 'id',
      data: service.getFlowNodes()
      // onInserting(values) {
      //   // values.id = values.id;
      //   values.text = values.text || '';
      //   values.type = values.type || '';
      // }
    });
    this.flowEdgesDataSource = new ArrayStore({
      key: 'id',
      data: service.getFlowEdges(),
    });
  }

  ngOnInit(): void {
    // this.flowNodesDataSource = new ArrayStore({
    //   key: 'id',
    //   data: this.service.getFlowNodes(),
    //   // onInserting(values) {
    //   //   // values.id = values.id;
    //   //   values.text = values.text || '';
    //   //   values.type = values.type || '';
    //   // }
    // });
    console.log('this.flowNodesDataSource = ', this.flowNodesDataSource);
  }

  ngAfterViewInit() {
    // this.flowNodesDataSource = new ArrayStore({
    //   key: 'id',
    //   data: this.service.getFlowNodes(),
    //   // onInserting(values) {
    //   //   // values.id = values.id;
    //   //   values.text = values.text || '';
    //   //   values.type = values.type || '';
    //   // }
    // });
    // console.log('this.flowNodesDataSource = ', this.flowNodesDataSource);
  }
}
