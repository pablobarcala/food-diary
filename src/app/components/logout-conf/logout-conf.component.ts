import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-conf',
  templateUrl: './logout-conf.component.html',
  styleUrls: ['./logout-conf.component.css']
})
export class LogoutConfComponent {
  constructor(private dialogRef: MatDialogRef<LogoutConfComponent>){}

  onNoClick() {
    this.dialogRef.close();
  }
}
