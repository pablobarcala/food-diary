import { Injectable } from '@angular/core';
import { collection, collectionData, deleteDoc, doc, Firestore } from '@angular/fire/firestore';
import { Time } from '../interfaces/Time';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimeService {

  constructor(private firestore: Firestore) {}

  getTime(uid: any): Observable<Time[]> {
    const ref = collection(this.firestore, `user/${uid}/time`);
    return collectionData(ref, {idField: 'id'}) as Observable<Time[]>;
  }

  deleteTime(id: any, uid: any) {
    const ref = doc(this.firestore, `user/${uid}/time/${id}`);
    return deleteDoc(ref);
  }
}
