import { Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { Register } from 'src/app/core/models/user';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { UserService } from 'src/app/core/services/user.service';
import Validation from 'src/app/core/utils/validation';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit, OnDestroy {
  signupForm:FormGroup;
  test: Date = new Date();
  submitted = false;

  constructor(
    public fb: FormBuilder, private userService:UserService , public readonly router:Router,  public notificationService:NotificationService, public spinnerService:SpinnerService
  ) {
    this.signupForm = this.fb.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6),Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$")]],
      acceptTerms: [false, Validators.requiredTrue],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: [Validation.match('password', 'confirmPassword')]
    });
   }

  ngOnInit() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
    body.classList.add('off-canvas-sidebar');
  }

  //Register User
  onSubmit() {
    this.submitted = true;
    if (this.signupForm.invalid) {
        return;
    }
      const request: Register = {
        firstName: this.signupForm.value.firstName,
        lastName: this.signupForm.value.lastName,
        email: this.signupForm.value.email,
        password: this.signupForm.value.password,
        confirmPassword: this.signupForm.value.confirmPassword,
      }
      if (request) {
        this.spinnerService.show();
        this.userService.register(request).subscribe((response) => {
          this.spinnerService.hide();
          this.signupForm.reset();
          this.notificationService.showNotification('success','Welcome to <b>SUXI ADMIN')
          this.router.navigate(['dashbord']);
        });
    }
}

  get signupform(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('register-page');
    body.classList.remove('off-canvas-sidebar');
  }
}