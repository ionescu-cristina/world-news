import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopBusniessUsNewsComponent } from './top-busniess-us-news.component';

describe('TopBusniessUsNewsComponent', () => {
  let component: TopBusniessUsNewsComponent;
  let fixture: ComponentFixture<TopBusniessUsNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopBusniessUsNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopBusniessUsNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
