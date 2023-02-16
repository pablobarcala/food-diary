import { Injectable } from '@angular/core';
import { 
  Firestore, 
  collection, 
  collectionData, 
  deleteDoc, 
  doc, 
  addDoc, 
  updateDoc 
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Food } from '../interfaces/Food';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor(private firestore: Firestore) {}

  getFood(uid: any): Observable<Food[]>{
    const ref = collection(this.firestore, `user/${uid}/food`);
    return collectionData(ref, {idField: 'id'}) as Observable<Food[]>;
  }

  deleteFood(id: any, uid:any){
    const ref = doc(this.firestore, `user/${uid}/food/${id}`);
    return deleteDoc(ref);
  }

  addFood(uid: any, food: Food) {
    const ref = collection(this.firestore, `user/${uid}/food`);
    return addDoc(ref, food)
  }

  editFood(id: any, uid: any, food: any) {
    const ref = doc(this.firestore, `user/${uid}/food/${id}`);
    return updateDoc(ref, food);
  }
}
