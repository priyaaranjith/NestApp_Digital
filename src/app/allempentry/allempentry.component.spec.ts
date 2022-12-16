import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllempentryComponent } from './allempentry.component';

describe('AllempentryComponent', () => {
  let component: AllempentryComponent;
  let fixture: ComponentFixture<AllempentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllempentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllempentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
