import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @Input() btnText: string;
  @Input() list: any[];
  constructor() {
  }

  ngOnInit() {
  }

}
