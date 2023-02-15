import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-food-conf',
  templateUrl: './food-conf.component.html',
  styleUrls: ['./food-conf.component.css']
})
export class FoodConfComponent {
  constructor(
    private dialogRef: MatDialogRef<FoodConfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any   
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }
}
