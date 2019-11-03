import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-modal',
  templateUrl: './signup-modal.component.html',
  styleUrls: ['./signup-modal.component.css']
})
export class SignupModalComponent implements OnInit {
  name = new FormControl("");
  collegeId = new FormControl("");
  email = new FormControl("");
  password = new FormControl("");
  location = new FormControl("");

  constructor() { }

  ngOnInit() {
  }

}