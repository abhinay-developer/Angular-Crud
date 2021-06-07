import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createFormOnInint();
  }

  createFormOnInint() {
    this.signUpForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],

      email: ['', [Validators.required]],

      password: ['', [Validators.required]],

      profession: ['', [Validators.required]],

      country: ['', [Validators.required]],

      city: ['', [Validators.required]],
    });
  }
}
