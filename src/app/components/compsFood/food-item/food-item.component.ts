import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Food } from 'src/app/interfaces/Food';
import { FOODS } from 'src/app/interfaces/mock-foods';
import { TIMES } from 'src/app/interfaces/mock-times';
import { Time } from 'src/app/interfaces/Time';
import { FoodService } from 'src/app/services/food.service';
import { FoodConfComponent } from '../food-conf/food-conf.component';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css']
})
export class FoodItemComponent{
  @Input() food: Food = FOODS[0];
  @Input() time: Time = TIMES[0];
  @Input() uid: any;

  constructor(
    private dialog: MatDialog, 
    private foodService: FoodService
  ){
  }
  
  openDialog(name: string | undefined, id: any) {
    const dialog = this.dialog.open(FoodConfComponent, {
      data: {
        name: name,
        id: id
      }
    });
    
    dialog.afterClosed().subscribe(response => {
      if(response) {
        this.foodService.deleteFood(id, this.uid)
        .then()
        .catch(error => console.log(error));
      }
    })
  }
}
