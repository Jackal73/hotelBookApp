import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import { AccommodationsComponent } from './accommodations/accommodations.component';
import { RoomsComponent } from './accommodations/rooms/rooms.component';
import { FoodAndBeverageComponent } from './food-and-beverage/food-and-beverage.component';
import { RestaurantsComponent } from './food-and-beverage/restaurants/restaurants.component';
import { BarsComponent } from './food-and-beverage/bars/bars.component';
import { LifestyleComponent } from './lifestyle/lifestyle.component';
import { WellnessAndSpaComponent } from './lifestyle/wellness-and-spa/wellness-and-spa.component';
import { ResortActivitiesComponent } from './lifestyle/resort-activities/resort-activities.component';
import { ExperiencesComponent } from './lifestyle/experiences/experiences.component';
import { ExcursionsComponent } from './lifestyle/excursions/excursions.component';
import { WeddingsComponent } from './weddings/weddings.component';
import { ThaiWeddingsComponent } from './weddings/thai-weddings/thai-weddings.component';
import { WesternWeddingsComponent } from './weddings/western-weddings/western-weddings.component';
import { CelebrationsComponent } from './celebrations/celebrations.component';
import { OffersComponent } from './offers/offers.component';
import { AuthComponent } from './auth/auth.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AccommodationsComponent,
    RoomsComponent,
    FoodAndBeverageComponent,
    RestaurantsComponent,
    BarsComponent,
    LifestyleComponent,
    WellnessAndSpaComponent,
    ResortActivitiesComponent,
    ExperiencesComponent,
    ExcursionsComponent,
    WeddingsComponent,
    ThaiWeddingsComponent,
    WesternWeddingsComponent,
    CelebrationsComponent,
    OffersComponent,
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatBadgeModule,
    MatButtonModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
