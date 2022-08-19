import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpansionPanelBottomComponent } from './expansion-panel-bottom.component';

describe('ExpansionPanelBottomComponent', () => {
  let component: ExpansionPanelBottomComponent;
  let fixture: ComponentFixture<ExpansionPanelBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpansionPanelBottomComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpansionPanelBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
