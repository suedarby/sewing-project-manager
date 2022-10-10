import { Injectable } from '@angular/core';
import { Interface } from 'src/app/interface/interface';

import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'

})
export class StashformService {
  items!: Observable<any>[];
  stashRef: any;
  db: any;


  constructor() {}

// Create stash
AddStash() {
  this.stashRef.push({


constructor(db: any, AngularFireDatabase: any){}

  });
}

  // Fetch Single stash Object
  GetStash(id: string) {
    this.stashRef = this.db.object('stashs-list/' + id);
    return this.stashRef;
  }

   // Fetch stashs List
   GetStashsList() {
    this.stashRef = this.db.list('stashs-list');
    return this.stashRef;
  }

// Update stash Object
UpdateStash() {
  this.stashRef.update({

  });
}





}
