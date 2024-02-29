import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-user',
  templateUrl: './user.component.html',
  styles: ''
})
export default class UserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
