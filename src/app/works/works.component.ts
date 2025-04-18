import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; // Add this import

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  currentRoute: string = '/';

  constructor(private router: Router) { } // Inject Router here
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

  ngOnInit(): void {
  }
}