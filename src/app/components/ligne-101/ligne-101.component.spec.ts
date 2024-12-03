import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ligne101Component } from './ligne-101.component';

describe('Ligne101Component', () => {
  let component: Ligne101Component;
  let fixture: ComponentFixture<Ligne101Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ligne101Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ligne101Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
