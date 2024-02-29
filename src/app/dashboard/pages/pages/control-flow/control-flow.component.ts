import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-control-flow',
  templateUrl: './control-flow.component.html',
  styles: ''
})
export default class ControlFlowComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
