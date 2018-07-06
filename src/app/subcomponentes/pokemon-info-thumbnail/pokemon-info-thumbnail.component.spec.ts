import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonInfoThumbnailComponent } from './pokemon-info-thumbnail.component';

describe('PokemonInfoThumbnailComponent', () => {
  let component: PokemonInfoThumbnailComponent;
  let fixture: ComponentFixture<PokemonInfoThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonInfoThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonInfoThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
