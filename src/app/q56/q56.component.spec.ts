import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q56Component } from './q56.component';

describe('Q56Component', () => {
  let component: Q56Component;
  let fixture: ComponentFixture<Q56Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Q56Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Q56Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
