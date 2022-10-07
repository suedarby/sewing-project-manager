import { Component, OnInit } from '@angular/core';
// import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
// import { AngularFirestore } from '@angular/fire/firestore';



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
    .collection("FormCRUD")
    .get()
    .subscribe((ss: { docs: any[]; }) => {
      ss.docs.forEach((doc: { data: () => any; }) => {
        this.myArray.push(doc.data());
      });
    });


    throw new Error('Method not implemented.');
  }

  // constructor() { }

  // ngOnInit() {
  // }


}
