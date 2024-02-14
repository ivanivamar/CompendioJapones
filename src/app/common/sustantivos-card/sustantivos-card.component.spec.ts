import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SustantivosCardComponent } from './sustantivos-card.component';

describe('VerbsCardComponent', () => {
  let component: SustantivosCardComponent;
  let fixture: ComponentFixture<SustantivosCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SustantivosCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SustantivosCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
