import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VillageDataComponent } from './village-data.component';

describe('VillageDataComponent', () => {
  let component: VillageDataComponent;
  let fixture: ComponentFixture<VillageDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VillageDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VillageDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
