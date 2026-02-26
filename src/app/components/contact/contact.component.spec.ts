import { fakeAsync, tick } from '@angular/core/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the section title', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.textContent).toContain("Let's Build Something");
  });

  it('should display 4 contact links', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.contact-link').length).toBe(4);
  });

  describe('copyEmail', () => {
    let writeTextSpy: jasmine.Spy;

    beforeEach(() => {
      writeTextSpy = spyOn(navigator.clipboard, 'writeText').and.returnValue(Promise.resolve());
    });

    it('should call clipboard writeText with the email from the link', async () => {
      const emailLink = component.links.find((l) => l.label === 'Email')!;
      const event = new Event('click');
      spyOn(event, 'preventDefault');
      component.copyEmail(emailLink, event);
      await fixture.whenStable();
      expect(writeTextSpy).toHaveBeenCalledWith('bryan.hubbard.dev@gmail.com');
      expect(event.preventDefault).toHaveBeenCalled();
    });

    it('should set copiedLabel to link label after successful copy', async () => {
      const emailLink = component.links.find((l) => l.label === 'Email')!;
      component.copyEmail(emailLink, new Event('click'));
      await fixture.whenStable();
      expect(component.copiedLabel).toBe('Email');
    });

    it('should reset copiedLabel to null after 2 seconds', fakeAsync(() => {
      const emailLink = component.links.find((l) => l.label === 'Email')!;
      component.copyEmail(emailLink, new Event('click'));
      tick();
      expect(component.copiedLabel).toBe('Email');
      tick(2000);
      expect(component.copiedLabel).toBeNull();
    }));

    it('should handle clipboard failure gracefully', async () => {
      writeTextSpy.and.returnValue(Promise.reject(new Error('Clipboard denied')));
      spyOn(console, 'error');
      spyOn(window, 'alert');
      const emailLink = component.links.find((l) => l.label === 'Email')!;
      component.copyEmail(emailLink, new Event('click'));
      await fixture.whenStable();
      expect(console.error).toHaveBeenCalled();
      expect(window.alert).toHaveBeenCalledWith(jasmine.stringContaining('Failed to copy'));
      expect(component.copiedLabel).toBeNull();
    });
  });
});
