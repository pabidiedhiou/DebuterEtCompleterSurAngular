import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/facesnap.models';
import { FacesnapsService } from 'src/app/core/services/facesnaps.service';
@Component({
  selector: 'app-singlefacesnap',
  templateUrl: './singlefacesnap.component.html',
  styleUrls: ['./singlefacesnap.component.scss']
})
export class SinglefacesnapComponent implements OnInit {
  constructor(private facesnapService : FacesnapsService, private route : ActivatedRoute){}

  facesnap$!:Observable<FaceSnap>
  ngOnInit(): void {
    const id = this.route.snapshot.params['id']
    console.log(`id = ${id} ; et son type est : ${typeof(id)}`)
    this.facesnap$ = this.facesnapService.getOneFaceSnap(id)
    this.facesnap$.subscribe((data) => console.log(data.description))
  }
}
