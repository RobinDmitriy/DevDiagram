import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MyDiagramComponent} from './my-diagram/my-diagram.component';
import {DxDiagramModule} from "devextreme-angular";
import {DiagramService} from "./services/diagram.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    MyDiagramComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxDiagramModule
  ],
  providers: [DiagramService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
