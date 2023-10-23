import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TascusRestApiComponent } from './tascus-rest-api.component';

describe('TascusRestApiComponent', () => {
  let component: TascusRestApiComponent;
  let fixture: ComponentFixture<TascusRestApiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TascusRestApiComponent]
    });
    fixture = TestBed.createComponent(TascusRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
