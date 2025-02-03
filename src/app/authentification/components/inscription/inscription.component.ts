import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{
  constructor(private formbuilder: FormBuilder, private authservice: AuthService){}
  emailform!: FormGroup

ngOnInit(): void {
  this.emailform = this.formbuilder.group({
    email: [null],
    password: [null]
  })
}
onSubmitForm(){
  this.authservice.signup(this.emailform.value)
  .subscribe((data) => console.log(`data: ${data.message}`))

}
}
