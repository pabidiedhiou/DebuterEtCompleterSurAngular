import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nouveaufacesnap',
  templateUrl: './nouveaufacesnap.component.html',
  styleUrls: ['./nouveaufacesnap.component.scss']
})
export class NouveaufacesnapComponent implements OnInit {
  constructor(private formBuilder : FormBuilder){}

  formulaire!: FormGroup

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      title: [null],
      description : [null],
      imageUrl : [null],
      location: [null]
    })
  }

  onCreer(){
    console.log(this.formulaire.value)
  }
}
