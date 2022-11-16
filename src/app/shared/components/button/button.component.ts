import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit,AfterViewInit {
  @Input() id:string | undefined;
  @Input() type:string="button";
  @Input() disabled:boolean = false;
  @Output() handleClick = new EventEmitter();
  @Input() classes:string ="btn";

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
  }

  /**
   * Emit Click
   */
  onClick(evt:Event){
    this.handleClick.emit(evt);
  }

}
