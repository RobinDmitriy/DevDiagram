import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

export class FlowNode {
  id?: number;
  text?: string;
  type?: string;
}

export class FlowEdge {
  id?: number;
  fromId?: number;
  toId?: number;
  text?: string | any;
}

const flowNodes: FlowNode[] = [
  {
    id: 107,
    text: 'A new ticket',
    type: 'terminator',
  },
  {
    id: 108,
    text: 'Analyze the issue',
    type: 'process',
  },
  {
    id: 118,
    text: 'Do we have all information to work with?',
    type: 'diamond',
  },
  {
    id: 120,
    text: 'Answered',
    type: 'terminator',
  },
  {
    id: 121,
    text: 'Request additional information or clarify the scenario',
    type: 'rectangle',
  },
  {
    id: 125,
    text: 'Prepare an example in Code Central',
    type: 'rectangle',
  },
  {
    id: 127,
    text: 'Update the documentation',
    type: 'rectangle',
  },
  {
    id: 131,
    text: 'Process the ticket',
    type: 'rectangle',
  },
  {
    id: 133,
    text: 'Work with the R&D team',
    type: 'rectangle',
  },
];

const flowEdges: FlowEdge[] = [
  {
    fromId: 107,
    id: 116,
    text: null,
    toId: 108,
  },
  {
    fromId: 108,
    id: 117,
    text: null,
    toId: 118,
  },
  {
    fromId: 118,
    id: 122,
    text: 'No',
    toId: 121,
  },
  {
    fromId: 121,
    id: 123,
    text: null,
    toId: 108,
  },
  {
    fromId: 131,
    id: 124,
    text: null,
    toId: 120,
  },
  {
    fromId: 120,
    id: 126,
    text: '',
    toId: 125,
  },
  {
    fromId: 120,
    id: 130,
    text: '',
    toId: 127,
  },
  {
    fromId: 118,
    id: 132,
    text: 'Yes',
    toId: 131,
  },
  {
    fromId: 131,
    id: 134,
    text: 'Need developer assistance?',
    toId: 133,
  },
  {
    fromId: 133,
    id: 135,
    text: null,
    toId: 120,
  },
];

@Injectable({
  providedIn: 'root'
})
export class DiagramService {

  public currentDataDiagram: BehaviorSubject<string> = new BehaviorSubject('');
  public savedDataDiagram: BehaviorSubject<string> = new BehaviorSubject('');

  constructor() {
  }

  getFlowNodes() {
    return flowNodes;
  }

  getFlowEdges() {
    return flowEdges;
  }

  setDataDiagram(data: string) {
    console.log('data = ', data);
    this.currentDataDiagram.next(data);
    if (data === '') {
      this.savedDataDiagram.next(data);
    }
  }

  onSaveDiagram() {
    console.log('onSaveDiagram this.currentDataDiagram.value = ', this.currentDataDiagram.value);
    if (this.currentDataDiagram.value !== '') {
      localStorage.setItem('diagram', this.currentDataDiagram.value);
      // this.savedDataDiagram.next(this.currentDataDiagram.value);
      console.log('Диаграмма сохранена!');
    }
  }

  onLoadDiagram() {
    const data = localStorage.getItem('diagram');
    if (!!data) {
      this.savedDataDiagram.next(data);
    }
  }
}
