import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { FaceSnap } from '../models/facesnap.models';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FacesnapsService {

  constructor(private http: HttpClient) { }
  
  getAllFaceSnaps():Observable<FaceSnap[]>{
    return this.http.get<FaceSnap[]>(`${environment.apiUrl}/stuff`)
  }

  createFaceSnap(facesnap: FaceSnap){
    this.http.post<string>(`${environment.apiUrl}/stuff`, facesnap)
  }

  getOneFaceSnap(id : string): Observable<FaceSnap>{
    return this.http.get<FaceSnap>(`${environment.apiUrl}/stuff/${id}`)

    
  }

}
