import { Component, OnInit } from '@angular/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { AuthGuard } from 'src/app/core/interceptors/auth.guard';
import { user } from 'src/app/core/models/user';
declare const $: any;

//Metadata
export interface RouteInfo {
  path: string;
  title: string;
  type: string;
  icontype: string;
  collapse?: string;
  children?: ChildrenItems[];
}

export interface ChildrenItems {
  path: string;
  title: string;
  ab: string;
  type?: string;
}

//Menu Items
export const ROUTES: RouteInfo[] = [{
  path: '/dashbord',
  title: 'Dashboard',
  type: 'link',
  icontype: 'dashboard'
},
{
  path: '/users',
  title: 'Users',
  type: 'link',
  icontype: 'people'
}
];

@Component({
  selector: 'app-sidebar-cmp',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  user: user | undefined;
  constructor(private authGuard: AuthGuard) {
    this.authGuard.currentUser.subscribe(res => {
      this.user = res;
    })

  }

  public menuItems: any[] | undefined;
  ps: any;
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  };

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      const elemSidebar = <HTMLElement>document.querySelector('.sidebar .sidebar-wrapper');
      this.ps = new PerfectScrollbar(elemSidebar);
    }
  }
  updatePS(): void {
    if (window.matchMedia(`(min-width: 960px)`).matches && !this.isMac()) {
      this.ps.update();
    }
  }
  isMac(): boolean {
    let bool = false;
    if (navigator.platform.toUpperCase().indexOf('MAC') >= 0 || navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
      bool = true;
    }
    return bool;
  }
  //Logout User
  logout() {
    this.authGuard.logout();
  }
}
