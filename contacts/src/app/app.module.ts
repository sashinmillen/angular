import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { ControlValueAccessor } from "@angular/forms";
import { Directive } from "@angular/core";
import { ElementRef } from "@angular/core";
import { NG_VALUE_ACCESSOR } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { DetailViewComponent } from './detail-view/detail-view.component';
import { HttpClientModule } from '@angular/common/http';
import { AddNewComponent } from './add-new/add-new.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    DetailViewComponent,
    AddNewComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
