import { Injectable, OnInit } from '@angular/core';
import { FaceSnap } from '../models/facesnaps.models';
import { HttpClient } from '@angular/common/http';
import { map, Observable, tap } from 'rxjs';
import { Message } from '../interfaces/message.interface';
@Injectable({
  providedIn: 'root',
})
export class FacenapService implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}
  facesnaps: FaceSnap[] = [];
  facesnap$!: Observable<FaceSnap>;
  facesnap!: FaceSnap;

  getFaceSnapById(snapId: string): Observable<FaceSnap> {
    const facesnap$ = this.http.get<FaceSnap>(
      `http://localhost:3000/api/stuff/${snapId}`
    );

    if (facesnap$) {
      return facesnap$;
    } else {
      throw new Error('FaceSnap non trouvé !');
    }
  }

  snapFaceSnapById(snapId: string, snapTyp: 'snap' | 'unsnap'): void {
    const facesnap$ = this.getFaceSnapById(snapId);

    const dataPromise = facesnap$.toPromise();

    snapTyp === 'snap'
      ? dataPromise.then((data: any) => {
          const formData = new FormData();
          formData.append('_id', `${data._id}`);
          formData.append('titre', data.titre);
          formData.append('description', data.description);
          formData.append('imageUrl', data.imageUrl);
          formData.append('snaps', `${255}`);
          formData.append('userId', `${data.userId}`);
          formData.append('location', data.location);
          this.http
            .put<any>(`http://localhost:3000/api/stuff/${snapId}`, formData)
            .subscribe((data) => console.log(data));
        })
      : dataPromise.then((data: any) => {
          const formData = new FormData();
          formData.append('_id', `${data._id}`);
          formData.append('titre', data.titre);
          formData.append('description', data.description);
          formData.append('imageUrl', data.imageUrl);
          formData.set('snaps', `${10}`);
          formData.append('userId', `${data.userId}`);
          formData.append('location', data.location);
          this.http
            .put<any>(`http://localhost:3000/api/stuff/${snapId}`, formData)
            .subscribe((data) => console.log(data));
        });
  }

  getAllFaceSnaps(): Observable<FaceSnap[]> {
    return this.http.get<FaceSnap[]>('http://localhost:3000/api/stuff');
  }
  createFaceSnaps(data: FormData): Observable<Message> {
    return this.http.post<Message>('http://localhost:3000/api/stuff', data);
  }
}
