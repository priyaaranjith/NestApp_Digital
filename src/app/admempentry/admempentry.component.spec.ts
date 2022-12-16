import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmempentryComponent } from './admempentry.component';

describe('AdmempentryComponent', () => {
  let component: AdmempentryComponent;
  let fixture: ComponentFixture<AdmempentryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmempentryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmempentryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
