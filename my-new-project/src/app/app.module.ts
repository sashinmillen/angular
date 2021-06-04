import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NameListComponent } from './name-list/name-list.component';
import { AllReferrersComponent } from './all-referrers/all-referrers.component';
import { CardsComponent } from './cards/cards.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
import { Child1Component } from './child1/child1.component';
import { ParentComponent } from './parent/parent.component';
import { Child2Component } from './child2/child2.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NameListComponent,
    AllReferrersComponent,
    CardsComponent,
    TutorialsComponent,
    Child1Component,
    ParentComponent,
    Child2Component,
    SearchBoxComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
