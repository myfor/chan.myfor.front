import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { 
  MatButtonModule, 
  MatToolbarModule, 
  MatExpansionModule, 
  MatProgressBarModule,
  MatCardModule,
  MatPaginatorModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule
} from '@angular/material';
import { DisabledDirective } from './directive/disabled.directive';

// import { PageEvent } from '@angular/material/paginator';

const MATERIAL = [
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatProgressBarModule,
  MatCardModule,
  MatPaginatorModule,
  MatDividerModule,
  MatInputModule,
  MatFormFieldModule
];

@NgModule({
  declarations: [
    AppComponent,
    DisabledDirective
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ...MATERIAL
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
