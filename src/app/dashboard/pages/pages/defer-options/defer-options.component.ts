import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-defer-options',
  templateUrl: './defer-options.component.html',
  styles: ''
})
export default class DeferOptionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
