
import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

import { AuthGuard } from './auth.guard';
import { NotificationService } from '../services/notification.service';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authGuard: AuthGuard, public notificationService:NotificationService ,public spinnerService:SpinnerService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        const currentUser = this.authGuard.currentUserValue;
        if (currentUser && currentUser.authToken) {
                request = request.clone({
                    setHeaders: {
                        Authorization: `Bearer ${currentUser.authToken}`,
                        "Content-Type": 'application/json'
                    }
                });
        }
        else {
            request = request.clone({
                setHeaders: {
                    "Content-Type": 'application/json'
                }
            });
        }
        return next.handle(request)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          let errorMsg = '';
          if (error.error instanceof ErrorEvent) {
            errorMsg = `Error: ${error.error.message}`;
            this.notificationService.showNotification('danger',errorMsg)
          }
          else {
            if(error.status == 400) {
              errorMsg = error.error.errors.join("<br/>");
            }
            else {
              errorMsg = `${error.error?.errorMessage}`;
            }
            this.notificationService.showNotification('danger',errorMsg)
          }
          this.spinnerService.hide();
          return throwError(errorMsg);
        })
      )

    }
}