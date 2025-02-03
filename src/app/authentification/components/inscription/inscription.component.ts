import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit{
  constructor(private formbuilder: FormBuilder){}
  emailform!: FormGroup

ngOnInit(): void {
  this.emailform = this.formbuilder.group({
    email: [null],
    password: [null]
  })
}
onSubmitForm(){
  console.log(this.emailform.value)
}
}
