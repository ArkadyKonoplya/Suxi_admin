import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnInit {
  @Output() handleClick = new EventEmitter();
  @Input() classes:string | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

   /**
   * Emit Click
   */
    onClick(evt:Event){
      this.handleClick.emit(evt);
    }

}
