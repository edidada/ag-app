import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCompontComponent } from './my-compont.component';

describe('MyCompontComponent', () => {
  let component: MyCompontComponent;
  let fixture: ComponentFixture<MyCompontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCompontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCompontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
