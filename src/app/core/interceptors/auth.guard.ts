import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { user } from '../models/user'

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    private currentUserSubject: BehaviorSubject<user>;
    public currentUser: Observable<user>;

    constructor(
        private router: Router
    ) { 
        this.currentUserSubject = new BehaviorSubject<user>(JSON.parse(localStorage.getItem('currentUser') || '{}'));
        this.currentUser = this.currentUserSubject.asObservable();
    } 

    public get isAuthenticated(): boolean {
        return this.currentUserSubject.value != null;
    }

    public get currentUserValue(): user {
        return this.currentUserSubject.value;
    }  

    public setCurrentUserValue(user : user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user)
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const currentUserVar = this.currentUserValue;
        if (Object.keys(currentUserVar).length != 0) {
            let cRoles = currentUserVar.role.split(",");
            let validRole = false;
            if (route.data['roles']) {
                cRoles.forEach(cr => {
                    if(route.data['roles'].includes(cr)){
                        validRole = true;
                        return ;
                    }
                });
                if(!validRole) {
                    this.router.navigate(['/error']);
                    return false;
                }
            }

            // authorised so return true
            return true;
        }
            this.router.navigate(['/account/login'], { queryParams: { callback: state.url } });
            return false;
    }

    
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null!);
        this.router.navigate(['/account/login']);
    }
}