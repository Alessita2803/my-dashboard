import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styles: ''
})
export class SidemenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
