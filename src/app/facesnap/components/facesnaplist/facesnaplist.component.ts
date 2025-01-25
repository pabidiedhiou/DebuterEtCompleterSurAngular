import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/facesnaps.models';
import { FacenapService } from '../../../core/services/feceSnap.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-facesnaplist',
  templateUrl: './facesnaplist.component.html',
  styleUrls: ['./facesnaplist.component.scss'],
})
export class FacesnaplistComponent implements OnInit {
  constructor(private facesnapservice: FacenapService) {}
  faceSnaps$!: Observable<FaceSnap[]>;
  ngOnInit(): void {
    this.faceSnaps$ = this.facesnapservice.getAllFaceSnaps();
  }
}
