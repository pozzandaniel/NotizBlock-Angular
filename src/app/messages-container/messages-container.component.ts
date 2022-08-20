import { Component, OnInit } from '@angular/core';
import { Database } from 'src/models/database';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-messages-container',
  templateUrl: './messages-container.component.html',
  styleUrls: ['./messages-container.component.scss']
})
export class MessagesContainerComponent implements OnInit {
  database: Array <any> ;
  database$: Observable <any>;
  postits: string[] = ['pingreen', 'pinorange', 'pinrosa', 'pinyellow']; 

  constructor(public firestore: Firestore) { 
    const coll = collection(firestore, 'database');
    this.database$ = collectionData(coll);

    this.database$.subscribe((newData) => {
      this.database = newData;
      console.log('database is:', this.database);
    })

  }

  ngOnInit(): void {
  }

}
