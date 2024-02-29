import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-change-detention',
  templateUrl: './change-detention.component.html',
  styles: ''
})
export default class ChangeDetentionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
