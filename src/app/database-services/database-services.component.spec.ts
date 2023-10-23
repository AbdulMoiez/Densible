import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseServicesComponent } from './database-services.component';

describe('DatabaseServicesComponent', () => {
  let component: DatabaseServicesComponent;
  let fixture: ComponentFixture<DatabaseServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DatabaseServicesComponent]
    });
    fixture = TestBed.createComponent(DatabaseServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
