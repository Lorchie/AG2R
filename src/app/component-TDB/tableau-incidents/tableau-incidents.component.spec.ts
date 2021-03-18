import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableauIncidentsComponent } from './tableau-incidents.component';

describe('TableauIncidentsComponent', () => {
  let component: TableauIncidentsComponent;
  let fixture: ComponentFixture<TableauIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableauIncidentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauIncidentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
