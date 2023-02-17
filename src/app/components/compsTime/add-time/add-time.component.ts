import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-add-time',
  templateUrl: './add-time.component.html',
  styleUrls: ['./add-time.component.css']
})
export class AddTimeComponent {
  form: FormGroup;
  uid: any;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private timeService: TimeService,
    private router: Router
  ){
    this.form = formBuilder.group({
      name: [''],
      timeStart: [''],
      timeEnd: ['']
    })
    this.uid = authService.getUid();
  }

  onSubmit() {
    if(this.form.valid){
      this.timeService.addTime(this.uid, this.form.value)
      .then(() => this.router.navigate(['/home/times']))
      .catch(error => console.log(error))
    } else {
      this.form.markAllAsTouched();
    }
  }
}
