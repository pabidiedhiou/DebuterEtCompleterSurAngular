import { Component, OnInit } from '@angular/core';
import { FacesnapsService } from 'src/app/core/services/facesnaps.service';
@Component({
  selector: 'app-facesnaplist',
  templateUrl: './facesnaplist.component.html',
  styleUrls: ['./facesnaplist.component.scss']
})
export class FacesnaplistComponent implements OnInit {
constructor(private facesnapService : FacesnapsService){}
ngOnInit(): void {
  this.facesnapService.getAllFaceSnaps().subscribe((data) => console.log(data))
}
}
