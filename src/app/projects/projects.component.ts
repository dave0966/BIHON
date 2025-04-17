import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [

    { image: 'assets/BTC.jpg', title: 'BTC SAMGYUPWINGS' },
    { image: 'assets/GYPSY.jpg', title: 'G Y P S Y' },
    { image: 'assets/Onsight.jpg', title: 'ONSIGHT' }
  ];
}