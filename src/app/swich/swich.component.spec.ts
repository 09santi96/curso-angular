import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwichComponent } from './swich.component';

describe('SwichComponent', () => {
  let component: SwichComponent;
  let fixture: ComponentFixture<SwichComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SwichComponent]
    });
    fixture = TestBed.createComponent(SwichComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
