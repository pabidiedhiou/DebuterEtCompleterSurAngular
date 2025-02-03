import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';
import { TokenService } from 'src/app/core/services/token.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
constructor(private formbuilder: FormBuilder, private authservice: AuthService, private tokenservice : TokenService){}
emailform!: FormGroup

ngOnInit(): void {
  this.emailform = this.formbuilder.group({
    email: [null],
    password: [null]
  })
}

onSubmitForm(){
  this.authservice.login(this.emailform.value)
  .pipe(
    map((data) => {
      this.tokenservice.saveToken(data.token)
    })
  )
  //subscribe((data) => console.log(`data : ${data.token}`))
}
}
