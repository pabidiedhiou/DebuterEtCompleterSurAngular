import { Component, OnInit } from '@angular/core';
import { FaceSnap } from 'src/app/core/models/facesnap.models';
import { FacesnapsService } from 'src/app/core/services/facesnaps.service';
@Component({
  selector: 'app-facesnaplist',
  templateUrl: './facesnaplist.component.html',
  styleUrls: ['./facesnaplist.component.scss']
})
export class FacesnaplistComponent implements OnInit {
constructor(private facesnapService : FacesnapsService){}
facesnaps$!: FaceSnap[]
ngOnInit(): void {
  this.facesnapService.getAllFaceSnaps().subscribe((data) => console.log(data))
}
}
