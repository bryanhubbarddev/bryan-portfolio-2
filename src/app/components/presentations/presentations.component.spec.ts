import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentationsComponent } from './presentations.component';

describe('PresentationsComponent', () => {
  let component: PresentationsComponent;
  let fixture: ComponentFixture<PresentationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresentationsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PresentationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render 3 presentation cards', () => {
    const el = fixture.nativeElement as HTMLElement;
    expect(el.querySelectorAll('.pres-card').length).toBe(3);
  });

  it('should render Tech Ed slides with 3 images', () => {
    const el = fixture.nativeElement as HTMLElement;
    const cards = Array.from(el.querySelectorAll('.pres-card')) as HTMLElement[];
    const techEdCard = cards.find(card =>
      card.textContent && card.textContent.includes('Tech Ed')
    );
    expect(techEdCard).withContext('Tech Ed presentation card not found').toBeTruthy();
    if (!techEdCard) return;
    const slideImages = techEdCard.querySelectorAll('.pres-slides img');
    expect(slideImages.length).toBe(3);
  });

  it('should render HomerCon with a video src', () => {
    const el = fixture.nativeElement as HTMLElement;
    const cards = Array.from(el.querySelectorAll('.pres-card')) as HTMLElement[];
    const homerConCard = cards.find(card =>
      card.textContent && card.textContent.includes('HomerCon')
    );
    expect(homerConCard).withContext('HomerCon presentation card not found').toBeTruthy();
    if (!homerConCard) return;
    const video = homerConCard.querySelector('video') as HTMLVideoElement | null;
    expect(video).withContext('HomerCon video element not found').toBeTruthy();
    if (!video) return;
    expect(video.getAttribute('src') || video.src).withContext('HomerCon video src should not be empty').toBeTruthy();
    expect(video.src || '').toContain('Demo-Final');
  });

  it('should render Toastmasters with Toastmasters.org and magazine links', () => {
    const el = fixture.nativeElement as HTMLElement;
    const cards = Array.from(el.querySelectorAll('.pres-card')) as HTMLElement[];
    const toastmastersCard = cards.find(card =>
      card.textContent && card.textContent.includes('Toastmasters')
    );
    expect(toastmastersCard).withContext('Toastmasters presentation card not found').toBeTruthy();
    if (!toastmastersCard) return;
    const links = toastmastersCard.querySelectorAll('a.pres-link');
    expect(links.length).withContext('Toastmasters should have two pres-link anchors').toBe(2);
    const hrefs = Array.from(links).map((a) => (a as HTMLAnchorElement).href);
    expect(hrefs.some((h) => h.includes('toastmasters.org/'))).toBeTrue();
    expect(hrefs.some((h) => h.includes('toastmasters.org/magazine'))).toBeTrue();
    expect(Array.from(links).every((a) => a.textContent && a.textContent.trim().length > 0))
      .withContext('Toastmasters link labels should not be empty')
      .toBeTrue();
  });
});
