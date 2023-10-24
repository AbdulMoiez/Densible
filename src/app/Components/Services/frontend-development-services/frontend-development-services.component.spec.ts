import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontendDevelopmentServicesComponent } from './frontend-development-services.component';

describe('FrontendDevelopmentServicesComponent', () => {
  let component: FrontendDevelopmentServicesComponent;
  let fixture: ComponentFixture<FrontendDevelopmentServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrontendDevelopmentServicesComponent]
    });
    fixture = TestBed.createComponent(FrontendDevelopmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
