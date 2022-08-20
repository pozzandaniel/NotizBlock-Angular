import { Component, OnInit } from '@angular/core';
import { Database } from 'src/models/database';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  currentDay;
  setCurrentDay;
  yyyy;
  database$: Observable <any>;
  title = '';
  annotation = '';
  dueDate = '';
  database: Database;

  constructor(public firestore: Firestore) {}

  ngOnInit(): void {
    this.todayDate();
    // this.database = new Database();
  }
  
  addNote() {
    if(this.title.length > 0 && this.annotation.length > 0) {
      const coll = collection(this.firestore, 'database');
      setDoc(doc(coll), {title: this.title, annotation: this.annotation});
      console.log(this.dueDate);
      this.title = '';
      this.annotation = '';
    }

  }

  todayDate() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    this.currentDay = dd + '/' + mm + '/' + yyyy;
    let setCurrentDay =yyyy + '-' + mm + '-' + dd;

    document.getElementById('inputDate').setAttribute('min', setCurrentDay);
    
  }

}
