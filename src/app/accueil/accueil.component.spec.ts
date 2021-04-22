import { ComponentFixture, TestBed } from '@angular/core/testing';

import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AccueilComponent } from './accueil.component';

describe('AccueilComponent', () => {
  let component: AccueilComponent;
  let fixture: ComponentFixture<AccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ],
      declarations: [ AccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
