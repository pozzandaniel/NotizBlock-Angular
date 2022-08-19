import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expansion-panel-bottom',
  templateUrl: './expansion-panel-bottom.component.html',
  styleUrls: ['./expansion-panel-bottom.component.scss']
})
export class ExpansionPanelBottomComponent implements OnInit {
  panelOpenState = false;
  constructor() { }

  ngOnInit(): void {
  }

}
