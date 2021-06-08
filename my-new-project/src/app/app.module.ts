import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NameListComponent } from './name-list/name-list.component';
import { AllReferrersComponent } from './all-referrers/all-referrers.component';
import { CardsComponent } from './cards/cards.component';
import { TutorialsComponent } from './tutorials/tutorials.component';
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
