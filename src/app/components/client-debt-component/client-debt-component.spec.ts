import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientDebtComponent } from './client-debt-component';

describe('ClientDebtComponent', () => {
  let component: ClientDebtComponent;
  let fixture: ComponentFixture<ClientDebtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientDebtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientDebtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
