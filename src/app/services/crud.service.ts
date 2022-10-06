import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
  AngularFireObject,
}
@Injectable({
  providedIn: 'root'
})
export class CrudService {


  stashRef: AngularFireList<any>;
  stashRef: AngularFireObject<any>;
  constructor(private db: stash) {}
  // Create Student
  AddStudent(stash: Stash) {
    this.stashRef.push({
      firstName: stash.firstName,
      lastName: stash.lastName,
      email: stash.email,
      mobileNumber: stash.mobileNumber,
    });
  }
  // Fetch Single Student Object
  GetStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    return this.studentRef;
  }
  // Fetch Students List
  GetStudentsList() {
    this.studentsRef = this.db.list('students-list');
    return this.studentsRef;
  }
  // Update Student Object
  UpdateStudent(student: Student) {
    this.studentRef.update({
      firstName: student.firstName,
      lastName: student.lastName,
      email: student.email,
      mobileNumber: student.mobileNumber,
    });
  }
  // Delete Student Object
  DeleteStudent(id: string) {
    this.studentRef = this.db.object('students-list/' + id);
    this.studentRef.remove();
  }
}


constructor() { }

}
