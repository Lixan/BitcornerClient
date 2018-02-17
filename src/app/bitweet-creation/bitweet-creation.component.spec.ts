import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitweetCreationComponent } from './bitweet-creation.component';

describe('BitweetCreationComponent', () => {
  let component: BitweetCreationComponent;
  let fixture: ComponentFixture<BitweetCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitweetCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitweetCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
