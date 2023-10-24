import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackendDevelopmentServicesComponent } from './backend-development-services.component';

describe('BackendDevelopmentServicesComponent', () => {
  let component: BackendDevelopmentServicesComponent;
  let fixture: ComponentFixture<BackendDevelopmentServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BackendDevelopmentServicesComponent]
    });
    fixture = TestBed.createComponent(BackendDevelopmentServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
