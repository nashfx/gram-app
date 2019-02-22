import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatCheckboxModule, MatGridListModule, MatToolbarModule, MatListModule, MatCardModule } from '@angular/material';
import { AppComponent } from './app.component';
import { AppService } from './app.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule,
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
