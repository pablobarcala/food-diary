import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form: FormGroup
  token: any

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {
    this.form = formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onSubmit(){
    if(this.form.valid) {
      this.authService.login(this.form.value)
        .then(() => {
          this.router.navigate([''])
          localStorage.setItem('auth_token', this.token)
        })
        .catch(() => {
          alert('Mail o contraseña incorrectos')
        })
    } else {
      this.form.markAllAsTouched();
    }
  }
}
