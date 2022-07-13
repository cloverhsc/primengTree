import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { TreeModule } from 'primeng/tree';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [AppComponent, TreeComponent],
  imports: [BrowserModule, AppRoutingModule, TreeModule, HttpClientModule, StoreModule.forRoot({}, {})],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
