import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FaceSnap } from 'src/app/core/models/facesnap.models';
import { FacesnapsService } from 'src/app/core/services/facesnaps.service';

@Component({
  selector: 'app-nouveaufacesnap',
  templateUrl: './nouveaufacesnap.component.html',
  styleUrls: ['./nouveaufacesnap.component.scss']
})
export class NouveaufacesnapComponent implements OnInit {
  constructor(private formBuilder : FormBuilder, private facesnapservice : FacesnapsService){}

  formulaire!: FormGroup
  facesnap!: FaceSnap

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      title: [null],
      description : [null],
      imageUrl : [null],
      location: [null]
    })

  }

  onSelect(event : any){
    if (event.target.files.length > 0) {
      const file = event.target.files[0]
      this.formulaire.get('imageUrl')?.setValue(file)
    }
  }

  onCreer(){
    this.facesnap = this.formulaire.value;
    this.facesnap._id = 10;
    this.facesnap.userId = 10;
    this.facesnap.createdDate = new Date();
    this.facesnap.snaps  = 10;
    console.log(this.facesnap)

    const formData = new FormData();
    formData.append('id', `${this.facesnap._id}`);
    formData.append('userId', `${this.facesnap.userId}`);
    formData.append('createdDate', `${this.facesnap.createdDate}`);
    formData.append('snaps', `${this.facesnap.snaps}`);
    formData.append('image', this.facesnap.imageUrl);
    formData.append('location', `${this.facesnap.location}`);
    formData.append('description', `${this.facesnap.description}`);
    formData.append('title', `${this.facesnap.title}`);

    this.facesnapservice.createFaceSnap(formData).subscribe((data) => {
      console.log(`Objet créé avec succès : `, data)
    })

  }

}
