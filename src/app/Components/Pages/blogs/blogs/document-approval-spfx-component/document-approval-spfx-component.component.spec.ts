import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentApprovalSpfxComponentComponent } from './document-approval-spfx-component.component';

describe('DocumentApprovalSpfxComponentComponent', () => {
  let component: DocumentApprovalSpfxComponentComponent;
  let fixture: ComponentFixture<DocumentApprovalSpfxComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DocumentApprovalSpfxComponentComponent]
    });
    fixture = TestBed.createComponent(DocumentApprovalSpfxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
