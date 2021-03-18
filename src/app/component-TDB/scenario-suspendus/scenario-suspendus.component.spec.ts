import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScenarioSuspendusComponent } from './scenario-suspendus.component';

describe('ScenarioSuspendusComponent', () => {
  let component: ScenarioSuspendusComponent;
  let fixture: ComponentFixture<ScenarioSuspendusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScenarioSuspendusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScenarioSuspendusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
