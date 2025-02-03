import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, tap } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
constructor(private formbuilder: FormBuilder, 
  private authservice: AuthService, 
  private tokenservice : TokenService, 
  private router: Router){}
emailform!: FormGroup

ngOnInit(): void {
  this.emailform = this.formbuilder.group({
    email: [null],
    password: [null]
  })
}

onLogin(){
  this.authservice.login(this.emailform.value)
  .subscribe((data) => {
      this.tokenservice.saveToken(data.token)
      this.tokenservice.getToken()
      console.log(data.token)
    }
  )

  
}
}
