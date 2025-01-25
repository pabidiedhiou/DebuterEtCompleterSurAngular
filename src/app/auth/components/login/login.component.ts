import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/authService';
import { TokenService } from 'src/app/core/services/tokenService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authservice: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private tokenservice: TokenService
  ) {}
  emailForm!: FormGroup;

  ngOnInit(): void {
    this.emailForm = this.formBuilder.group({
      email: [null],
      password: [null],
    });
  }
  onLogin() {
    this.authservice.login(this.emailForm.value).subscribe((data) => {
      console.log(`data: ${data}`),
        this.tokenservice.saveToken(data.token),
        this.router.navigateByUrl('facesnaps');
    });
  }
}
