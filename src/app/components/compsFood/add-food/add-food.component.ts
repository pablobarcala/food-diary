import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { FoodService } from 'src/app/services/food.service';
import { TimeService } from 'src/app/services/time.service';
import { Time } from 'src/app/interfaces/Time';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit{
  form: FormGroup;
  times: Time[] = [];
  uid: any;

  constructor(
    private formBuilder: FormBuilder, 
    private foodService: FoodService, 
    private timeService: TimeService,
    private authService: AuthService,
    private router: Router
  ){
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      type: ['', [Validators.required]],
      cantidad: ['', [Validators.required]],
      description: [''],
      date: [new Date(), [Validators.required]],
      timeRef: ['', [Validators.required]]
    });
    this.uid = this.authService.getUid();
  }

  onSubmit() {
    this.foodService.addFood(this.uid, this.form.value)
    .then(() => this.router.navigate(['home']))
    .catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.timeService.getTime(this.uid).subscribe(data => this.times = data);
  }
}
