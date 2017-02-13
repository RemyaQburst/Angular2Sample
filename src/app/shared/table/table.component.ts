import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() settings: Object;
  @Input() data: any[];
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}
