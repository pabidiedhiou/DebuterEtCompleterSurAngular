import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { map, Observable } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/facesnap.models';
@Component({
  selector: 'app-facesnap',
  templateUrl: './facesnap.component.html',
  styleUrls: ['./facesnap.component.scss']
})
export class FacesnapComponent implements OnInit{
  constructor(private route:ActivatedRoute){}
  facesnaps$!:Observable<FaceSnap[]>
  ngOnInit(): void {
    this.facesnaps$ = this.route.data.pipe(
      map((data) => data['facesnaps'])
    )
  }
}
