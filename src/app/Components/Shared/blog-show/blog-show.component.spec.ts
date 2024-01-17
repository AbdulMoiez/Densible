import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogShowComponent } from './blog-show.component';

describe('BlogShowComponent', () => {
  let component: BlogShowComponent;
  let fixture: ComponentFixture<BlogShowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogShowComponent]
    });
    fixture = TestBed.createComponent(BlogShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
