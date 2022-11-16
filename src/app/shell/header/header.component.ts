import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/core/interceptors/auth.guard';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  layoutMode!: string;
  mode: string | undefined;

  constructor(private authGuard: AuthGuard) { }

  ngOnInit(): void {
  }

  //Logout User
  logout(){
    this.authGuard.logout();
  }
}
