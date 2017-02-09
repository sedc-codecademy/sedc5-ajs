import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { PersonEditorComponent } from '../person-editor/person-editor';
import { PersonService } from '../person-service/person-service';

@NgModule({
  declarations: [
    AppComponent,
    PersonEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PersonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
