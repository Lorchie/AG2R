import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageAccueilComponent } from './message-accueil.component';

describe('MessageAccueilComponent', () => {
  let component: MessageAccueilComponent;
  let fixture: ComponentFixture<MessageAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageAccueilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
