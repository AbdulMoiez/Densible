import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationServicesComponent } from './collaboration-services.component';

describe('CollaborationServicesComponent', () => {
  let component: CollaborationServicesComponent;
  let fixture: ComponentFixture<CollaborationServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CollaborationServicesComponent]
    });
    fixture = TestBed.createComponent(CollaborationServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
