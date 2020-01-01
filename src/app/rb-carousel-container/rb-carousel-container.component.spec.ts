import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RbCarouselContainerComponent } from './rb-carousel-container.component';

describe('RbCarouselContainerComponent', () => {
  let component: RbCarouselContainerComponent;
  let fixture: ComponentFixture<RbCarouselContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RbCarouselContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RbCarouselContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
