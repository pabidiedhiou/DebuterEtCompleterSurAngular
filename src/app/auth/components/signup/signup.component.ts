import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/authService';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private authservice: AuthService
  ) {}
  emailForm!: FormGroup;

  ngOnInit(): void {
    this.emailForm = this.formbuilder.group({
      email: [null],
      password: [null],
    });
  }
  onSubmitForm() {
    this.authservice
      .signUp(this.emailForm.value)
      .subscribe((data) => console.log(data));
  }
}
