import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatPlanBatchComponent } from './etat-plan-batch.component';

describe('EtatPlanBatchComponent', () => {
  let component: EtatPlanBatchComponent;
  let fixture: ComponentFixture<EtatPlanBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
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
