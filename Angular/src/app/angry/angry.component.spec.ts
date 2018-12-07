import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngryComponent } from './angry.component';

describe('AngryComponent', () => {
  let component: AngryComponent;
  let fixture: ComponentFixture<AngryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
