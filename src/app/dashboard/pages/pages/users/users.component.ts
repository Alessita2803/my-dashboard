import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: ''
})
export default class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
