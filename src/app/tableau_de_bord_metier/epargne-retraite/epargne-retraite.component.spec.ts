import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpargneRetraiteComponent } from './epargne-retraite.component';

describe('EpargneRetraiteComponent', () => {
  let component: EpargneRetraiteComponent;
  let fixture: ComponentFixture<EpargneRetraiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpargneRetraiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpargneRetraiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
