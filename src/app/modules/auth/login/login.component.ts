import { Component, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { login } from 'src/app/core/models/user';
import { NotificationService } from 'src/app/core/services/notification.service';
import { SpinnerService } from 'src/app/core/services/spinner.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  test: Date = new Date();
  private toggleButton: any;
  private sidebarVisible: boolean;
  private nativeElement: Node;
  loginForm: UntypedFormGroup;
  submitted = false;

  constructor(private element: ElementRef,  public fb: UntypedFormBuilder, private userService:UserService , public readonly router:Router ,public notificationService:NotificationService, public spinnerService:SpinnerService ) {
      this.nativeElement = element.nativeElement;
      this.sidebarVisible = false;
      this.loginForm = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }

  ngOnInit() {
      var navbar : HTMLElement = this.element.nativeElement;
      this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
      const body = document.getElementsByTagName('body')[0];
      body.classList.add('login-page');
      body.classList.add('off-canvas-sidebar');
      const card = document.getElementsByClassName('card')[0];
      setTimeout(function() {
          // after 1000 ms we add the class animated to the login/register card
          card.classList.remove('card-hidden');
      }, 700);
  }


  //Call Login Method
  onSubmit() {
    this.submitted = true;   
    if (this.loginForm.invalid) {
        return;
    }
    if (this.loginForm.value) {
      const request: login = {
        email: this.loginForm.value.email,
        password: this.loginForm.value.password
      }
      if (request) {
        this.spinnerService.show();
        this.userService.login(request).subscribe((response) => {
          this.spinnerService.hide();
          if (response.isAuthSuccessful) {
            this.notificationService.showNotification('success','Login successfully')
            this.router.navigate(['dashbord']);
            this.loginForm.reset();
            this.submitted = false;
          }
        });
      }
    }
}

//login form 
  get loginform(): { [key: string]: AbstractControl } {
    return this.loginForm.controls;
  }

  //Use for CSS Style 
  sidebarToggle() {
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];
      var sidebar = document.getElementsByClassName('navbar-collapse')[0];
      if (this.sidebarVisible == false) {
          setTimeout(function() {
              toggleButton.classList.add('toggled');
          }, 500);
          body.classList.add('nav-open');
          this.sidebarVisible = true;
      } else {
          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          body.classList.remove('nav-open');
      }
  }


  //Destroy value
  ngOnDestroy(){
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('login-page');
    body.classList.remove('off-canvas-sidebar');
  }
}
