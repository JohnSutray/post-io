import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersThumbnailComponent } from './users-thumbnail.component';

describe('UsersThumbnailComponent', () => {
  let component: UsersThumbnailComponent;
  let fixture: ComponentFixture<UsersThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
