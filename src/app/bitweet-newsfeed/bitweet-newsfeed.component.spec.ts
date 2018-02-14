import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitweetNewsfeedComponent } from './bitweet-newsfeed.component';

describe('BitweetNewsfeedComponent', () => {
  let component: BitweetNewsfeedComponent;
  let fixture: ComponentFixture<BitweetNewsfeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitweetNewsfeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitweetNewsfeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
