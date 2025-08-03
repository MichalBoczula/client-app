import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientFormComponentNgrx } from './client-form-component-ngrx';

describe('ClientFormComponentNgrx', () => {
  let component: ClientFormComponentNgrx;
  let fixture: ComponentFixture<ClientFormComponentNgrx>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClientFormComponentNgrx]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientFormComponentNgrx);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
