import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/facesnap.models';
@Component({
  selector: 'app-facesnaplist',
  templateUrl: './facesnaplist.component.html',
  styleUrls: ['./facesnaplist.component.scss']
})
export class FacesnaplistComponent implements OnInit {
constructor(private router : Router){}
@Input() facesnap!: FaceSnap
ngOnInit(): void {

}

voirSnapParId(){
  this.router.navigateByUrl(`facesnap/${this.facesnap._id}`)
}
}
