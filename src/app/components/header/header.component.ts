import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { LogoutConfComponent } from '../logout-conf/logout-conf.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    public authService: AuthService, 
    private router: Router, 
    private dialog: MatDialog
  ){}

  onLogout() {
    const dialog = this.dialog.open(LogoutConfComponent);

    dialog.afterClosed().subscribe(response => {
      if(response) {
        this.authService.logout()
        .then(() => this.router.navigate(['/login']))
        .catch(error => console.log(error));
      }
    })
  }
}
