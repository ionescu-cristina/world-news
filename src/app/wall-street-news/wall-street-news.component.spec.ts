import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WallStreetNewsComponent } from './wall-street-news.component';

describe('WallStreetNewsComponent', () => {
  let component: WallStreetNewsComponent;
  let fixture: ComponentFixture<WallStreetNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WallStreetNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WallStreetNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
