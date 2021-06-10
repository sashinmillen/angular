import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { NameListComponent } from './name-list/name-list.component';
import { AllReferrersComponent } from './all-referrers/all-referrers.component';
import { CardsComponent } from './cards/cards.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { FormsModule } from '@angular/forms';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CardsSubDataComponent } from './cards/cards-sub-data/cards-sub-data.component';
import { ContactSubDataComponent } from './contact-list/contact-sub-data/contact-sub-data.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    NameListComponent,
    AllReferrersComponent,
    CardsComponent,
    SearchBoxComponent,
    ContactListComponent,
    CardsSubDataComponent,
    ContactSubDataComponent,
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
