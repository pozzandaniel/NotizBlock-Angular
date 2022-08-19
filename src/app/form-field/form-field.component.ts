import { Component, OnInit } from '@angular/core';
import { Database } from 'src/models/database';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.scss']
})
export class FormFieldComponent implements OnInit {
  database$: Observable <any>;
  dataBase: Array <any>;
  title = '';
  annotation = '';
  database: Database;

  constructor(public firestore: Firestore) {
      const coll = collection(firestore, 'database');
      this.database$ = collectionData(coll);

      this.database$.subscribe((newData) => {
        console.log('newData sind: ', newData);

      })
   }

  ngOnInit(): void {
    this.database = new Database();
  }
  
  addNote() {
    if(this.title.length > 0 && this.annotation.length > 0) {
      this.database.titles.push(this.title);
      this.database.messages.push(this.annotation);
      console.log(this.database);
      this.title = '';
      this.annotation = '';
    }

  }

}
