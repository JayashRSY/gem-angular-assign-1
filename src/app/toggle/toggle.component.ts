import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  isToggle = false;
  countClicks = 0;
  toggleBtn() {
    this.isToggle = !this.isToggle;
    console.log(this.countClicks)
    this.countClicks++;
  }
}
