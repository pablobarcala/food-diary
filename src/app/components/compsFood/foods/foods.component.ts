import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  selectedDate: Date; 
  form: FormGroup;

  constructor(
    private foodService: FoodService, 
    private authService: AuthService,
    private timeService: TimeService,
    private formBuilder: FormBuilder
  ){
    this.uid = this.authService.getUid();
    this.selectedDate = new Date();
    this.form = this.formBuilder.group({
      date: [this.selectedDate]
    });
  }
  
  ngOnInit() {
    this.timeService.getTime(this.uid).subscribe(data => this.times = data)
    this.getFoods();
  }
  
  getFoods() {
    this.foodService.getFood(this.uid).subscribe(data => {
      this.foods = data;
      this.foods.sort((a, b) => a.timeRef - b.timeRef)
      this.foodTime = [];
      this.foods.forEach(food => {
        const time = this.times.find(t => t.id === food.timeRef);
        this.foodTime.push({food, time});
      })
    });
  }

  filterFoodDate() {
    const selectedDate = new Date(this.form.value.date.toDateString());
    return this.foodTime.filter((foodTimeU: any) => {
      const foodDate = new Date(foodTimeU.food.date.toDate().toDateString());
      return foodDate.getTime() === selectedDate.getTime();
    })
  }
}
