import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVillageDataComponent } from './add-village-data.component';

describe('AddVillageDataComponent', () => {
  let component: AddVillageDataComponent;
  let fixture: ComponentFixture<AddVillageDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVillageDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVillageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
