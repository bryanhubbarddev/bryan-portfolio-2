import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroComponent } from './hero.component';

describe('HeroComponent', () => {
  let component: HeroComponent;
  let fixture: ComponentFixture<HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    fixture.destroy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the hero name', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('Bryan B.');
    expect(el.textContent).toContain('Hubbard II');
  });

  it('should display the View My Work button', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain('View My Work');
  });
});
