import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitweetCommentCreationComponent } from './bitweet-comment-creation.component';

describe('BitweetCommentCreationComponent', () => {
  let component: BitweetCommentCreationComponent;
  let fixture: ComponentFixture<BitweetCommentCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitweetCommentCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitweetCommentCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
