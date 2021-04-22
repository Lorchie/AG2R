import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { SaisieManuelleComponent } from './saisie-manuelle.component';

describe('SaisieManuelleComponent', () => {
  let component: SaisieManuelleComponent;
  let fixture: ComponentFixture<SaisieManuelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
        MatDialogModule,
        BrowserAnimationsModule,
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ],
      declarations: [ SaisieManuelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieManuelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
