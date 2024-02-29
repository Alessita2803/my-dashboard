import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-fast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './heavy-loader-fast.component.html',
  styles:  '',
  template: `
  <h1>Hola Mundo</h1>
 `
})

export class HeavyLoaderSlowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
