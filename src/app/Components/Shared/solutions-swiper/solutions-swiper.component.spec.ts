import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsSwiperComponent } from './solutions-swiper.component';

describe('SolutionsSwiperComponent', () => {
  let component: SolutionsSwiperComponent;
  let fixture: ComponentFixture<SolutionsSwiperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionsSwiperComponent]
    });
    fixture = TestBed.createComponent(SolutionsSwiperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
