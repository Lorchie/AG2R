import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import { EtatPlanBatchComponent } from './etat-plan-batch.component';

describe('EtatPlanBatchComponent', () => {
  let component: EtatPlanBatchComponent;
  let fixture: ComponentFixture<EtatPlanBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatDialogModule,
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        }
      ],
      declarations: [ EtatPlanBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatPlanBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
