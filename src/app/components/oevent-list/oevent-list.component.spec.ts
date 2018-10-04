import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OeventListComponent } from './oevent-list.component';

describe('OeventListComponent', () => {
  let component: OeventListComponent;
  let fixture: ComponentFixture<OeventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OeventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OeventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
