import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisieMessagesComponent } from './saisie-messages.component';

describe('SaisieMessagesComponent', () => {
  let component: SaisieMessagesComponent;
  let fixture: ComponentFixture<SaisieMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaisieMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisieMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
