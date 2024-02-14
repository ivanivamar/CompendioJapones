import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerbsCardComponent } from './verbs-card.component';

describe('VerbsCardComponent', () => {
  let component: VerbsCardComponent;
  let fixture: ComponentFixture<VerbsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VerbsCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VerbsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
