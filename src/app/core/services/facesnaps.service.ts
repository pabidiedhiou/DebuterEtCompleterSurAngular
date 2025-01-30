import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FaceSnap } from '../models/facesnap.model';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacesnapsService {

  constructor(private http: HttpClient) { }
  
  getAllFaceSnaps():Observable<FaceSnap[]>{
    return this.http.get<FaceSnap[]>(`${environment.apiUrl}/facesnaps`)
  }

}
