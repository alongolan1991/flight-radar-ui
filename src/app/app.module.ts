import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

// Libraries
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule, MatInputModule } from '@angular/material';
import { MatTabsModule } from '@angular/material/tabs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FlightFormComponent } from './components/flight-form/flight-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartComponent } from './components/chart/chart.component';
import { DocumentationComponent } from './components/documentation/documentation.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    FooterComponent,
    FlightFormComponent,
    ChartComponent,
    DocumentationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
