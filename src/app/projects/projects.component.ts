import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Added Router import

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  currentRoute: string = '/';
  projects = [
    { image: 'assets/BTC.jpg', title: 'BTC SAMGYUPWINGS' },
    { image: 'assets/GYPSY.jpg', title: 'G Y P S Y' },
    { image: 'assets/Onsight.jpg', title: 'ONSIGHT' }
  ];
  
  constructor(private router: Router) {} // Injected Router
  isHomeRoute(): boolean {
    return this.currentRoute === '/';
  }
  scrollToBG2() {
    // Check if we're already on the home route
    if (this.router.url === '/' || this.router.url === '/home') {
      // If already on home, just scroll to section
      this.scrollToBG2Section();
    } else {
      // If not on home, navigate first then scroll
      this.router.navigate(['/']).then(() => {
        // Wait for navigation to complete
        setTimeout(() => {
          this.scrollToBG2Section();
        }, 100); // Small delay to ensure DOM is ready
      });
    }
  }
  
  private scrollToBG2Section() {
    const bg2Element = document.getElementById('bg2');
    if (bg2Element) {
      bg2Element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' // Aligns top of element with top of viewport
      });
    }
  }
}