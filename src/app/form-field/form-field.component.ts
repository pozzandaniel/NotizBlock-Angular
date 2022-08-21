import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Database } from 'src/models/database';
import { Firestore, collectionData, collection, setDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit, OnChanges {

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());
  currentDay;
  setCurrentDay;
  yyyy;
  database$: Observable <any>;
  title = '';
  annotation = '';
  dueDate = '';
  dueDateAsString = '';
  name = '';
  database: Database;

  constructor(public firestore: Firestore) {}

  ngOnInit(): void {
    this.todayDate();
  }

  ngOnChanges(): void {
      let dueDateSplit = this.dueDate.split("-");
      console.log(dueDateSplit);
  }
  
  addNote() {
    if(this.title.length > 0 && this.annotation.length > 0 && this.dueDate.length && this.name.length > 0) {
      const coll = collection(this.firestore, 'database');
      setDoc(doc(coll), {title: this.title, annotation: this.annotation, currentDate: this.currentDay, dueDate: this.dueDate, name: this.name});
      this.title = '';
      this.annotation = '';
      this.dueDate = '';
      this.name = '';
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
