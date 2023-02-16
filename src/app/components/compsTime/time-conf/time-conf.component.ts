import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-time-conf',
  templateUrl: './time-conf.component.html',
  styleUrls: ['./time-conf.component.css']
})
export class TimeConfComponent {
  constructor(
    private dialogRef: MatDialogRef<TimeConfComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  onNoClick() {
    this.dialogRef.close();
  }

}
