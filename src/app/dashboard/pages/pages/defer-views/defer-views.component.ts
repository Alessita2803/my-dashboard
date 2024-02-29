import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-defer-views',
  templateUrl: './defer-views.component.html',
  styles: ''
})
export default class DeferViewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
