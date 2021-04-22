import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute } from '@angular/router';
import { TableauDeBordComponent } from './tableau-de-bord.component';

describe('TableauDeBordComponent', () => {
  let component: TableauDeBordComponent;
  let fixture: ComponentFixture<TableauDeBordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [ActivatedRoute],
      declarations: [ TableauDeBordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableauDeBordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
