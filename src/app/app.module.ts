import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { MatButtonModule, MatToolbarModule, MatExpansionModule } from '@angular/material';
import { DisabledDirective } from './directive/disabled.directive';

const MATERIAL = [
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
];

@NgModule({
  declarations: [
    AppComponent,
    DisabledDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...MATERIAL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
