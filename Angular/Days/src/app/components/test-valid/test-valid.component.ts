import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-valid',
  templateUrl: './test-valid.component.html',
  styleUrls: ['./test-valid.component.css'],
})
export class TestValidComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  ourValidationForm = new FormGroup({
    name: new FormControl('Ali', Validators.required),
    age: new FormControl(20, [Validators.min(18), Validators.max(50)]),
  });
  get nameValid() {
    return this.ourValidationForm.controls.name.valid;
  }
  get ageValid() {
    return this.ourValidationForm.controls.age.valid;
  }
}
