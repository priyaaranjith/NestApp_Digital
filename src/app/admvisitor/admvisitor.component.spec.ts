import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmvisitorComponent } from './admvisitor.component';

describe('AdmvisitorComponent', () => {
  let component: AdmvisitorComponent;
  let fixture: ComponentFixture<AdmvisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmvisitorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmvisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
