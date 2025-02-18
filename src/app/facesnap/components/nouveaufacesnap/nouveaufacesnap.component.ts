import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { map, Observable} from 'rxjs';
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
  snapform$!: Observable<FaceSnap>

  ngOnInit(): void {
    this.formulaire = this.formBuilder.group({
      title: [null],
      description : [null],
      imageUrl : [null],
      location: [null]
    })

    this.snapform$ = this.formulaire.valueChanges.pipe(
      map((valeursFormulaire) =>({
        ...valeursFormulaire,
        _id : 10,
        snaps : 10,
        userId : 10,
        createdDate : new Date(),

      }))
    )
  }

  onCreer(){
    //console.log(this.formulaire.value)

    this.snapform$.subscribe((facesnap) => {
      this.facesnapservice.createFaceSnap(facesnap).subscribe((response) => {console.log(response)})
    })
  }

}
