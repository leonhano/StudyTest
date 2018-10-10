import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XxxComponentComponent } from './xxx-component.component';

describe('XxxComponentComponent', () => {
  let component: XxxComponentComponent;
  let fixture: ComponentFixture<XxxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XxxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XxxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
