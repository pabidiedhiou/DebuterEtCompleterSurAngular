import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, map } from 'rxjs';
import { FaceSnap } from '../../../core/models/facesnaps.models';
import { FacenapService } from 'src/app/core/services/feceSnap.service';

@Component({
  selector: 'app-newfacesnap',
  templateUrl: './newfacesnap.component.html',
  styleUrls: ['./newfacesnap.component.scss'],
})
export class NewfacesnapComponent implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private facesnapservice: FacenapService
  ) {}
  images: any;
  imgUrl!: string;
  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  facesnap!: FaceSnap;
  ngOnInit(): void {
    this.snapForm = this.formbuilder.group(
      {
        title: [null, [Validators.required]],
        description: [null, [Validators.required]],
        imageUrl: [null, [Validators.required]],
        location: [null],
      },
      {
        updateOn: 'blur',
      }
    );
    /* this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
      map((facesnap) => ({
        ...facesnap,
        createdDate: new Date(),
        snaps: 5,
        id: 0,
      }))
    );*/
  }

  onSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.snapForm.patchValue({ imageUrl: file });
      var reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        this.imgUrl = reader.result as string;
      };
    }
    const file = event.target.files[0];
    this.snapForm.patchValue({ imageUrl: file });
  }

  onSubmit() {
    this.facesnap = this.snapForm.value;
    this.facesnap._id = 1;
    this.facesnap.snaps = 10;
    this.facesnap.createdDate = new Date();
    this.facesnap.userId = 12;
    console.log(this.facesnap.imageUrl);
    /*
    this.facesnapservice.createFaceSnaps(this.facesnap).subscribe((data) => {
      console.log(data);
    });*/
  }
}
