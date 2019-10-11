import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEntryFormComponent } from './table-entry-form.component';

describe('TableEntryFormComponent', () => {
  let component: TableEntryFormComponent;
  let fixture: ComponentFixture<TableEntryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEntryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEntryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
