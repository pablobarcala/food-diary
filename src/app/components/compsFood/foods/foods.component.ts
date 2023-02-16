import { Component, OnInit } from '@angular/core';
import { Food } from 'src/app/interfaces/Food';
import { Time } from 'src/app/interfaces/Time';
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.css']
})
export class FoodsComponent implements OnInit{
  foods: Food[] = [];
  times: Time[] = [];

  foodTime: any = [];

  uid: any = null;

  constructor(
    private foodService: FoodService, 
    private authService: AuthService,
    private timeService: TimeService
  ){
    this.uid = this.authService.getUid();
  }
  
  ngOnInit() {
    this.timeService.getTime(this.uid).subscribe(data => this.times = data)
    this.getFoods();
  }
  
  getFoods() {
    this.foodService.getFood(this.uid).subscribe(data => {
      this.foods = data;
      this.foodTime = [];
      this.foods.forEach(food => {
        const time = this.times.find(t => t.id === food.timeRef);
        this.foodTime.push({food, time});
      })
    });
  }
}
