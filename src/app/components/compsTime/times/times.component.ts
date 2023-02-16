import { Component } from '@angular/core';
import { Time } from 'src/app/interfaces/Time';
import { AuthService } from 'src/app/services/auth.service';
import { TimeService } from 'src/app/services/time.service';

@Component({
  selector: 'app-times',
  templateUrl: './times.component.html',
  styleUrls: ['./times.component.css']
})
export class TimesComponent {
  times: Time[] = [];
  uid: any;

  constructor(private authService: AuthService, private timeService: TimeService) {
    this.uid = this.authService.getUid();
  }

  ngOnInit() {
    this.timeService.getTime(this.uid).subscribe(data => this.times = data);
  }

}
