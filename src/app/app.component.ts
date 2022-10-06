import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gem-angular-assign-1';

  isToggle = false;
  countClicks = 0;
  inputText = ""
  toggleBtn() {
    this.isToggle = !this.isToggle;
    console.log(this.countClicks)
    this.countClicks++;
  }

  list: any = [];
  addItem(item: any) {
    if (item == "") {
      alert("Please enter something!");
    }
    else {
      this.list.push(item);
      this.inputText = ""
    }
  }

}

// break code in component wish make child parent component
// dont use any type
// show error msg while user click on add button without any text
//use reactive form for input field 
