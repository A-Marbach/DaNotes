import { Injectable, inject } from '@angular/core';
import { Firestore, collectionData, collection, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteListService {


  items$;
  items;
  firestore: Firestore = inject(Firestore);

  constructor() { 
    this.items$ = collectionData(this.getNotesRef());
    this.items = this.items$.subscribe( (list) => {
      list.forEach(element => {
        console.log(element);
      });
    });
    this.items.unsubscribe();


  }


  // const itemCollection = collection(this.firestore, 'items');

  getTrashRef(){
    return collection(this.firestore, 'trash');
  }
  getNotesRef(){
    return collection(this.firestore, 'notes');
  }


  getSingleDocRef(colId:string, docId:string){
    return doc(collection(this.firestore, colId), docId);
  }
}
