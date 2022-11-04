import {Component, OnInit, ViewChild} from '@angular/core';
import ArrayStore from "devextreme/data/array_store";
import {DiagramService} from "../services/diagram.service";
import {Subscription} from "rxjs";
import {DxDiagramComponent} from "devextreme-angular";

@Component({
  selector: 'app-my-diagram',
  templateUrl: './my-diagram.component.html',
  styleUrls: ['./my-diagram.component.scss'],
  preserveWhitespaces: true
})
export class MyDiagramComponent implements OnInit {
  @ViewChild(DxDiagramComponent, {static: false}) diagram?: DxDiagramComponent;

  savedDataDiagramSub?: Subscription;
  flowNodesDataSource: ArrayStore;
  flowEdgesDataSource: ArrayStore;

  constructor(public service: DiagramService) {
    this.flowNodesDataSource = new ArrayStore({
      key: 'id',
      // data: service.getFlowNodes()
      data: []
    });
    this.flowEdgesDataSource = new ArrayStore({
      key: 'id',
      // data: service.getFlowEdges(),
      data: []
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.subscribeToSavedDataDiagram();
  }

  updateDataDiagram() {
    console.log('updateDataDiagram');
    this.service.setDataDiagram(<string>this.diagram?.instance.export());
  }

  private subscribeToSavedDataDiagram() {
    this.savedDataDiagramSub = this.service.savedDataDiagram.subscribe(data => {
      if (data !== '') {
        console.log('subscribeToSavedDataDiagram data = ', data)
        console.log('Данные диаграммы загружены!')
        this.diagram?.instance.import(data);
      } else {
        console.log('Диаграмма пустая!')
        this.diagram?.instance.import('');
      }
    });
  }
}
