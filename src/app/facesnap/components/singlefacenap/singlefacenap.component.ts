import { Component, OnInit } from '@angular/core';
import { FacenapService } from '../../../core/services/feceSnap.service';
import { FaceSnap } from '../../../core/models/facesnaps.models';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-singlefacenap',
  templateUrl: './singlefacenap.component.html',
  styleUrls: ['./singlefacenap.component.scss'],
})
export class SinglefacenapComponent implements OnInit {
  text_bouton = 'Liker';
  constructor(
    private facesnapservice: FacenapService,
    private route: ActivatedRoute
  ) {}
  facesnap$!: Observable<FaceSnap>;
  snapId!: string;
  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.facesnap$ = this.facesnapservice.getFaceSnapById(id);
  }

  onSnap() {
    if (this.text_bouton == 'Liker') {
      this.facesnapservice.snapFaceSnapById(this.snapId, 'snap');
      this.text_bouton = 'Unliker';
    } else {
      this.facesnapservice.snapFaceSnapById(this.snapId, 'unsnap');
      this.text_bouton = 'Liker';
    }
  }
}
