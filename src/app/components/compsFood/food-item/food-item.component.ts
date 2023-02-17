import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Food } from 'src/app/interfaces/Food';
import { FOODS } from 'src/app/interfaces/mock-foods';
import { TIMES } from 'src/app/interfaces/mock-times';
import { Time } from 'src/app/interfaces/Time';
import { FoodEditComponent } from '../food-edit/food-edit.component';

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
    private dialog: MatDialog
  ){
  }
  
  openDialog(food: Food) {
    const dialog = this.dialog.open(FoodEditComponent, {
      data: {
        food: food,
        uid: this.uid
      }
    })

    dialog.afterClosed().subscribe()
  }
}
