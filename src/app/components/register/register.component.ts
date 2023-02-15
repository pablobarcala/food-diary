import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private authService: AuthService, 
    private router: Router
  ) {
    this.form = formBuilder.group({
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    })
  }

  get Name() {
    return this.form.get('name');
  }

  get Lastname() {
    return this.form.get('lastname');
  }

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  onSubmit() {
    if(this.form.valid) {
      this.authService.register(this.form.value.email, this.form.value.password)
      .then(() => {
        this.router.navigate(['/login']);
      })
      .catch(error => alert(error));
    } else {
      this.form.markAllAsTouched();
    }
  }
}
