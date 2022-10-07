import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor() { }

  inputForm!: FormGroup;
  ngOnInit(): void {
    this.inputForm = new FormGroup({
      'inputText': new FormControl('', [Validators.required])
    })
  }

  inputText = ''
  list: any = [];
  isError = false

  submitData() {    
    if (this.inputForm.value.inputText == "") {
      this.isError = true;
      return
    }
    else {
      this.list.push(this.inputForm.value.inputText);
      this.isError = false;
    }
  }

}
