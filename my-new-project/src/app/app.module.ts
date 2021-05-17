import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { CardOneComponent } from './card-one/card-one.component';
import { CardTwoComponent } from './card-two/card-two.component';
import { CardThreeComponent } from './card-three/card-three.component';

import { CardFiveComponent } from './card-five/card-five.component';
import { CardSixComponent } from './card-six/card-six.component';
import { CardSevenComponent } from './card-seven/card-seven.component';
import { CardEightComponent } from './card-eight/card-eight.component';
import { NameListComponent } from './name-list/name-list.component';
import { AllReferrersComponent } from './all-referrers/all-referrers.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    CardOneComponent,
    CardTwoComponent,
    CardThreeComponent,

    CardFiveComponent,
    CardSixComponent,
    CardSevenComponent,
    CardEightComponent,
    NameListComponent,
    AllReferrersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
