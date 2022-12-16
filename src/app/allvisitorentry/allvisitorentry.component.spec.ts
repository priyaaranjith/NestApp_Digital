import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllvisitorentryComponent } from './allvisitorentry.component';

describe('AllvisitorentryComponent', () => {
  let component: AllvisitorentryComponent;
  let fixture: ComponentFixture<AllvisitorentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllvisitorentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllvisitorentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
