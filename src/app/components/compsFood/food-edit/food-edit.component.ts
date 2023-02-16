import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Time } from 'src/app/interfaces/Time';
import { FoodService } from 'src/app/services/food.service';
import { TimeService } from 'src/app/services/time.service';
import { FoodConfComponent } from '../food-conf/food-conf.component';

@Component({
  selector: 'app-food-edit',
  templateUrl: './food-edit.component.html',
  styleUrls: ['./food-edit.component.css']
})
export class FoodEditComponent implements OnInit {
  times: Time[] = [];
  form: FormGroup

  constructor(
    private dialog: MatDialog,
    private foodService: FoodService,
    private timeService: TimeService,
    private dialogRef: MatDialogRef<FoodEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
  ) { 
    this.form = this.formBuilder.group({
      name: [data.food.name, [Validators.required]],
      type: [data.food.type, [Validators.required]],
      cantidad: [data.food.cantidad, [Validators.required]],
      timeRef: [data.food.timeRef, [Validators.required]],
      date: [data.food.date, [Validators.required]],
      description: [data.food.description]
    })}

  ngOnInit() {
    this.timeService.getTime(this.data.uid).subscribe(data => this.times = data);
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onDelete(id: any) {
    const dialog = this.dialog.open(FoodConfComponent, {
      data: {
        name: this.data.food.name
      }
    })

    dialog.afterClosed().subscribe(response => {
      if(response){
        this.foodService.deleteFood(id, this.data.uid)
        this.dialogRef.close();
      }
    })
  }

  onSubmit(id: any){
    if(this.form.valid){
      this.foodService.editFood(id, this.data.uid, this.form.value)
        .then(() => this.dialogRef.close())
        .catch(error => console.log(error))
    }
  }
}
