import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PinsListItemComponent } from './pins-list-item.component';

describe('PinsListItemComponent', () => {
  let component: PinsListItemComponent;
  let fixture: ComponentFixture<PinsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PinsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PinsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
