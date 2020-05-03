import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistrictListItemComponent } from './district-list-item.component';

describe('DistrictListItemComponent', () => {
  let component: DistrictListItemComponent;
  let fixture: ComponentFixture<DistrictListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistrictListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistrictListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
