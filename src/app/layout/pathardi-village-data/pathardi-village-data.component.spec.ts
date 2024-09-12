import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PathardiVillageDataComponent } from './pathardi-village-data.component';

describe('PathardiVillageDataComponent', () => {
  let component: PathardiVillageDataComponent;
  let fixture: ComponentFixture<PathardiVillageDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PathardiVillageDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PathardiVillageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
