import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, deleteDoc, doc, Firestore, getDocs, limit, orderBy, query, setDoc } from '@angular/fire/firestore';
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

  async addTime(uid: any, time: Time) {
    const ref = collection(this.firestore, `user/${uid}/time`);

    const q = query(ref, orderBy('id', 'desc'), limit(1));
    const querySnapshot = await getDocs(q);

    let newDocId = 1;
    if(!querySnapshot.empty){
      const lastDoc = querySnapshot.docs[0];
      newDocId = lastDoc.data()['id'] + 1;
    }
    const newDocData = {id: newDocId}
    console.log(q, querySnapshot, newDocId)
    return setDoc(doc(ref, `${newDocId}`), {...time, ...newDocData});
  }
}
