import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceRhComponent } from './finance-rh.component';

describe('FinanceRhComponent', () => {
  let component: FinanceRhComponent;
  let fixture: ComponentFixture<FinanceRhComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceRhComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceRhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
