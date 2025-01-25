import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FacenapService } from 'src/app/core/services/feceSnap.service';
import { FaceSnap } from 'src/app/core/models/facesnaps.models';
@Component({
  selector: 'app-listfacesnaps2',
  templateUrl: './listfacesnaps2.component.html',
  styleUrls: ['./listfacesnaps2.component.scss'],
})
export class Listfacesnaps2Component implements OnInit {
  constructor(
    private formbuilder: FormBuilder,
    private facesnapservice: FacenapService
  ) {}

  snapForm!: FormGroup;
  faceSnap!: FaceSnap;
  faceSnapFile: any;
  imageUrl: any;
  ngOnInit(): void {
    this.snapForm = this.formbuilder.group(
      {
        title: [null],
        description: [null],
        imageUrl: [null],
        location: [null],
      },
      {
        updateOn: 'blur',
      }
    );
  }

  onSelect(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageUrl = file;
      this.snapForm.get('imageUrl')?.setValue(file);
    }
  }

  onSubmit() {
    this.faceSnap = this.snapForm.value;
    this.faceSnap._id = 1;
    this.faceSnap.snaps = 10;
    this.faceSnap.userId = 12;
    this.faceSnap.createdDate = new Date();
    const formData = new FormData();
    formData.append('id', `${this.faceSnap._id}`),
      formData.append('title', this.faceSnap.title);
    formData.append('description', this.faceSnap.description);
    formData.append('image', this.faceSnap.imageUrl);
    formData.append('location', this.faceSnap.location);
    formData.append('snaps', `${this.faceSnap.snaps}`);
    formData.append('createdDate', `${this.faceSnap.createdDate}`);
    formData.append('userId', `${this.faceSnap.userId}`);
    console.log(this.faceSnap);
    this.facesnapservice.createFaceSnaps(formData).subscribe((data) => {
      console.log(data);
    });
    /*
    this.faceSnap = this.snapForm.value;
    this.faceSnap.snaps = 10;
    this.faceSnap.createdDate = new Date();
    this.faceSnap.userId = 12;
    console.log(this.faceSnap);
    */
  }
}
