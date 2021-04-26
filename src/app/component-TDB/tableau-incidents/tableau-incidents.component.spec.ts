import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TableauIncidentsComponent } from './tableau-incidents.component';

describe('TableauIncidentsComponent', () => {
  let component: TableauIncidentsComponent;
  let fixture: ComponentFixture<TableauIncidentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
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

  it('should 2 incidents col vide', () => {
    expect(component.createColEmpty(1).length).toBe(2);
  });

  it('should 0 incidents col vide', () => {
    expect(component.createColEmpty(4).length).toBe(0);
  });

  it('should 3 incidents col', () => {
    expect(component.createColEmpty(0).length).toBe(3);
  });

});
