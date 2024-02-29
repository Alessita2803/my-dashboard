import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from 'express';

@Component({
  standalone: true,
  imports: [RouterModule],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: ''
})
export default class DashboardComponent{

  constructor() { }

}
