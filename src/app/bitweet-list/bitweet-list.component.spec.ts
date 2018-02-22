import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitweetListComponent } from './bitweet-list.component';

describe('BitweetListComponent', () => {
  let component: BitweetListComponent;
  let fixture: ComponentFixture<BitweetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitweetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitweetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
