import { Component, OnInit } from '@angular/core';

import { StashformService } from './stashform.service';


@Component({
  selector: 'app-stashform',
  templateUrl: './stashform.component.html',
  styleUrls: ['./stashform.component.css']
})
export class StashformComponent implements OnInit {
  Firestore: any;
  myArray: any;

  constructor() {}
  ngOnInit() {
    this.Firestore
    .collection("StashformService")
    .get()
    .subscribe((ss: { docs: any[]; }) => {
      ss.docs.forEach((doc: { data: () => any; }) => {
        this.myArray.push(doc.data());
      });
    });


    // throw new Error('Method not implemented.');
  }

  // constructor() { }

  // ngOnInit() {
  // }


}
