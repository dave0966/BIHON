import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  currentRoute: string = '/';
  projects = [
    { 
      image: 'assets/BTC.jpg', 
      title: 'BTC SAMGYUPWINGS',
      route: '/btc' // Added route property
    },
    { 
      image: 'assets/GYPSY.jpg', 
      title: 'G Y P S Y',
      route: '/gypsy' // Added route property
    },
    { 
      image: 'assets/Onsight.jpg', 
      title: 'ONSIGHT',
      externalUrl: 'https://www.youtube.com/watch?v=eH-UH7W7qd8&ab_channel=AwfulSaintz' // Added YouTube URL
    }
  ];
  
  constructor(private router: Router) {}

  isHomeRoute(): boolean {
    return this.currentRoute === '/';
  }

  // New method to handle project navigation
  navigateToProject(project: any) {
    if (project.externalUrl) {
      // Open YouTube link in new tab
      window.open(project.externalUrl, '_blank');
    } else if (project.route) {
      // Navigate to internal route
      this.router.navigate([project.route]);
    }
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