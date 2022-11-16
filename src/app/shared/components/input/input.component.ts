import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input() classes:string | undefined;
  @Input() type:string | undefined;
  @Input() formControlName:string ="";
  @Input() placeholder:string | undefined;
  @Input() id:string | undefined;

  constructor() { }

  ngOnInit(): void {
  }
  
}
