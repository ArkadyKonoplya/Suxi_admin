import { AfterContentChecked, AfterViewInit, ChangeDetectorRef, Component } from '@angular/core';
import { SpinnerService } from './core/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit,AfterContentChecked{
  title = 'Suxi_admin';
  constructor(public spinnerService:SpinnerService,private cdr: ChangeDetectorRef){
  }
  ngAfterContentChecked(){
    this.cdr.detectChanges();
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
