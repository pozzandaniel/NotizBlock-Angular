import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelTopComponent } from './expansion-panel-top.component';

describe('ExpansionPanelTopComponent', () => {
  let component: ExpansionPanelTopComponent;
  let fixture: ComponentFixture<ExpansionPanelTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionPanelTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanelTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
