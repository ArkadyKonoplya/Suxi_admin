import {Component, Input, ChangeDetectionStrategy} from '@angular/core';

export interface TableData {
  headerRow: string[];
  dataRows: string[][];
}

@Component({
  selector: 'app-md-table',
  templateUrl: './md-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MdTableComponent {
  @Input()
  public title: string | undefined;

  @Input()
  public subtitle: string | undefined;

  @Input()
  public cardClass: string | undefined;

  @Input()
  public data: TableData | undefined;

  constructor() { }
}
