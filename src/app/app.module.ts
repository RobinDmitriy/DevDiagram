import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {MyDiagramComponent} from './my-diagram/my-diagram.component';
import {DxDiagramModule} from "devextreme-angular";
import {DiagramService} from "./services/diagram.service";
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    AppComponent,
    MyDiagramComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DxDiagramModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [DiagramService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
