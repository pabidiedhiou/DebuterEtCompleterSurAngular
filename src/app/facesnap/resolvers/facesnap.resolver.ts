import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { FacesnapsService } from 'src/app/core/services/facesnaps.service';
import { FaceSnap } from 'src/app/core/models/facesnap.models';
import { Observable } from 'rxjs';
export const facesnapResolver: ResolveFn<Observable<FaceSnap[]>> = (route, state) => {

  const facesnapService = inject(FacesnapsService)
  return facesnapService.getAllFaceSnaps();
};
