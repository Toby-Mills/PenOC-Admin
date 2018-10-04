import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeventComponent } from './oevent.component';

describe('OeventComponent', () => {
  let component: OeventComponent;
  let fixture: ComponentFixture<OeventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
