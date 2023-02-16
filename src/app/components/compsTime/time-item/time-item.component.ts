import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TIMES } from 'src/app/interfaces/mock-times';
import { Time } from 'src/app/interfaces/Time';
import { TimeService } from 'src/app/services/time.service';
import { TimeConfComponent } from '../time-conf/time-conf.component';

@Component({
  selector: 'app-time-item',
  templateUrl: './time-item.component.html',
  styleUrls: ['./time-item.component.css']
})
export class TimeItemComponent {
  @Input() time: Time = TIMES[0];
  @Input() uid: any;

  constructor(private timeService: TimeService, private dialog: MatDialog){}

  openDialog(name: string | undefined, id: any) {
    const dialog = this.dialog.open(TimeConfComponent, {
      data: {
        name: name
      }
    })
    dialog.afterClosed().subscribe(response => {
      if(response){
        this.timeService.deleteTime(id, this.uid)
        .then()
        .catch(error => console.log(error))
      }
    })
  }
}
