import { Component, Input, OnInit } from '@angular/core';
import { FacenapService } from '../../../core/services/feceSnap.service';
import { FaceSnap } from '../../../core/models/facesnaps.models';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-facesnaps',
  templateUrl: './facesnaps.component.html',
  styleUrls: ['./facesnaps.component.scss'],
})
export class FacesnapsComponent implements OnInit {
  constructor(
    private facesnapservice: FacenapService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  @Input() facesnaps!: FaceSnap;
  snapId!: string;
  text_bouton = 'Liker';

  ngOnInit(): void {}

  onSnap() {
    this.snapId = this.facesnaps._id.toString();
    if (this.text_bouton == 'Liker') {
      this.facesnapservice.snapFaceSnapById(this.snapId, 'snap');
      this.text_bouton = 'Unliker';
    } else {
      this.facesnapservice.snapFaceSnapById(this.snapId, 'unsnap');
      this.text_bouton = 'Liker';
    }
  }

  showSnap(): void {
    this.router.navigateByUrl(`facesnaps/${this.facesnaps._id}`);
  }
}
