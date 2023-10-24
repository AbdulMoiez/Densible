import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionSwiperDatabaseComponent } from './solution-swiper-database.component';

describe('SolutionSwiperDatabaseComponent', () => {
  let component: SolutionSwiperDatabaseComponent;
  let fixture: ComponentFixture<SolutionSwiperDatabaseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SolutionSwiperDatabaseComponent]
    });
    fixture = TestBed.createComponent(SolutionSwiperDatabaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
