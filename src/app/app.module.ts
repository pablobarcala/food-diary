import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FoodsComponent } from './components/compsFood/foods/foods.component';
import { FoodItemComponent } from './components/compsFood/food-item/food-item.component';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TimesComponent } from './components/compsTime/times/times.component';
import { AddFoodComponent } from './components/compsFood/add-food/add-food.component';
import { LogoutConfComponent } from './components/logout-conf/logout-conf.component';
import { FoodEditComponent } from './components/compsFood/food-edit/food-edit.component';
import { FoodConfComponent } from './components/compsFood/food-conf/food-conf.component';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { DatePipe } from '@angular/common';
import { TimeItemComponent } from './components/compsTime/time-item/time-item.component';
import { TimeConfComponent } from './components/compsTime/time-conf/time-conf.component';
import { AddTimeComponent } from './components/compsTime/add-time/add-time.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FoodsComponent,
    FoodItemComponent,
    AboutComponent,
    LoginComponent,
    RegisterComponent,
    TimesComponent,
    AddFoodComponent,
    LogoutConfComponent,
    FoodEditComponent,
    FoodConfComponent,
    CustomDatePipe,
    TimeItemComponent,
    TimeConfComponent,
    AddTimeComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [
    CustomDatePipe,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
