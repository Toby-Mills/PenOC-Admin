import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitorEditorComponent } from './competitor-editor.component';

describe('CompetitorEditorComponent', () => {
  let component: CompetitorEditorComponent;
  let fixture: ComponentFixture<CompetitorEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitorEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitorEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
