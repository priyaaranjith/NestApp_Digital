import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitoraddentryComponent } from './visitoraddentry.component';

describe('VisitoraddentryComponent', () => {
  let component: VisitoraddentryComponent;
  let fixture: ComponentFixture<VisitoraddentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisitoraddentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisitoraddentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
