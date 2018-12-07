import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiringComponent } from './inspiring.component';

describe('InspiringComponent', () => {
  let component: InspiringComponent;
  let fixture: ComponentFixture<InspiringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspiringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
