import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})
export class AnchorComponent implements OnInit {
  @Input() classes:string | undefined;
  @Input() href:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

   
}
