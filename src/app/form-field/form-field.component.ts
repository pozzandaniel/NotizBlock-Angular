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
  
  database$: Observable <any>;
  title = '';
  annotation = '';
  database: Database;

  constructor(public firestore: Firestore) {
      // const coll = collection(firestore, 'database');
      // this.database$ = collectionData(coll);

      // this.database$.subscribe((newData) => {
      //   console.log('newData sind: ', newData);
      //   this.database = newData;
      // })
   }

  ngOnInit(): void {
    // this.database = new Database();
  }
  
  addNote() {
    if(this.title.length > 0 && this.annotation.length > 0) {
      const coll = collection(this.firestore, 'database');
      setDoc(doc(coll), {title: this.title, annotation: this.annotation});
      this.title = '';
      this.annotation = '';
    }

  }

}
