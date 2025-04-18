import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gypsy',
  templateUrl: './gypsy.component.html',
  styleUrls: ['./gypsy.component.scss']
})
export class GypsyComponent {
  currentRoute: string = '/';
  scrolled = false;

  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  isHomeRoute(): boolean {
    return this.currentRoute === '/';
  }

  scrollToBG2() {
    if (this.router.url === '/' || this.router.url === '/home') {
      this.scrollToBG2Section();
    } else {
      this.router.navigate(['/']).then(() => {
        setTimeout(() => {
          this.scrollToBG2Section();
        }, 100);
      });
    }
  }
  
  private scrollToBG2Section() {
    const bg2Element = document.getElementById('bg2');
    if (bg2Element) {
      bg2Element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
}