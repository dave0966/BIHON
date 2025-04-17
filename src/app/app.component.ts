import { Component, HostListener, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  currentRoute: string = '/';
  isMenuOpen = false;
  scrolled = false;
  darkText = false; // Added this property

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
      this.isMenuOpen = false; // Close menu when route changes
      setTimeout(() => this.checkNavbarColor(), 0);
    });
  }

  ngOnInit() {
    this.checkNavbarColor();
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
    this.checkNavbarColor();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    if (!target.closest('.navbar') && this.isMenuOpen) {
      this.isMenuOpen = false;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  isHomeRoute(): boolean {
    return this.currentRoute === '/';
  }

  private checkNavbarColor() {
    if (!this.isHomeRoute()) {
      this.darkText = false;
      return;
    }

    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const navbarRect = navbar.getBoundingClientRect();
    const navbarBottom = navbarRect.bottom;
    const sections = document.querySelectorAll('.fullscreen-section');
    
    let shouldBeDark = false;
    
    sections.forEach(section => {
      const sectionRect = section.getBoundingClientRect();
      
      if (navbarBottom > sectionRect.top && navbarRect.top < sectionRect.bottom) {
        if (section.classList.contains('bg2') || section.classList.contains('bg3')) {
          shouldBeDark = true;
        }
      }
    });
    
    this.darkText = shouldBeDark;
  }
}