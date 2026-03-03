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

  describe('tech tags', () => {
    it('should set tag as active when clicked', () => {
      fixture.detectChanges();
      const tags = fixture.nativeElement.querySelectorAll('.tag');
      const angularTag = tags[0];
      angularTag.click();
      fixture.detectChanges();
      expect(component.activeTag()).toBe('Angular');
    });

    it('should deactivate tag when clicked again', () => {
      fixture.detectChanges();
      const tags = fixture.nativeElement.querySelectorAll('.tag');
      const angularTag = tags[0];
      angularTag.click();
      fixture.detectChanges();
      expect(component.activeTag()).toBe('Angular');
      angularTag.click();
      fixture.detectChanges();
      expect(component.activeTag()).toBeNull();
    });

    it('should clear active tag when clicking outside tech-float', () => {
      fixture.detectChanges();
      const tags = fixture.nativeElement.querySelectorAll('.tag');
      tags[0].click();
      fixture.detectChanges();
      expect(component.activeTag()).toBe('Angular');
      const heroName = fixture.nativeElement.querySelector('.hero-name');
      heroName?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
      fixture.detectChanges();
      expect(component.activeTag()).toBeNull();
    });

    it('should activate tag on Enter key', () => {
      fixture.detectChanges();
      const tags = fixture.nativeElement.querySelectorAll('.tag');
      const angularTag = tags[0] as HTMLElement;
      angularTag.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
      fixture.detectChanges();
      expect(component.activeTag()).toBe('Angular');
    });

    it('should activate tag on Space key', () => {
      fixture.detectChanges();
      const tags = fixture.nativeElement.querySelectorAll('.tag');
      const typeScriptTag = tags[1] as HTMLElement;
      typeScriptTag.dispatchEvent(new KeyboardEvent('keydown', { key: ' ', bubbles: true }));
      fixture.detectChanges();
      expect(component.activeTag()).toBe('TypeScript');
    });
  });
});
