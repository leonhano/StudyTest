import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YyyComponentComponent } from './yyy-component.component';

describe('YyyComponentComponent', () => {
  let component: YyyComponentComponent;
  let fixture: ComponentFixture<YyyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YyyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YyyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
