import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { LoginComponent } from 'src/app/components/login/login.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';
import { RegisterComponent } from 'src/app/components/register/register.component';
import { AboutComponent } from 'src/app/components/about/about.component';
import { TimesComponent } from 'src/app/components/times/times.component';
import { FoodsComponent } from 'src/app/components/compsFood/foods/foods.component';
import { AddFoodComponent } from 'src/app/components/compsFood/add-food/add-food.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {
    path: 'home', 
    component: HomeComponent,
    ...canActivate(() => redirectUnauthorizedTo(['/login'])),
    children: [
      {path: '', component: FoodsComponent},
      {path: 'times', component: TimesComponent},
      {path: 'new-item', component: AddFoodComponent}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'about', component: AboutComponent}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
