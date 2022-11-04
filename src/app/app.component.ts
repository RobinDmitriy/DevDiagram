import {Component} from '@angular/core';
import {DiagramService} from "./services/diagram.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DevDiagram';
  dataDiagram = '';

  constructor(private service: DiagramService) {
  }

  onButtonSave() {
    this.service.onSaveDiagram();
  }

  onLoadSave() {
    this.service.onLoadDiagram();
  }

  onButtonClear() {
    this.service.setDataDiagram('');
  }
}
