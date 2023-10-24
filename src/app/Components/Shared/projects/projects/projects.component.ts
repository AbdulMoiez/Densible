import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects = [
    {
        title: 'Team Suite (Human Capital Management Solution)',
        description: 'Team Suite, is a new-age Human Capital Management Solution combining the strengths of Cloud and Mobility.',
        imageSrc: '/assets/img/projects/project-1.png'
      },
    {
        title: 'CORN POS',
        description: 'CORN POS is a comprehensive point of sale system in Pakistan, it\'s Simple, Quick & Scalable.',
        imageSrc: '/assets/img/projects/project-2.png'
      },
      {
        title: 'HIMS (Health Care System)',
        description: 'A patient registration system is used to maintain demographic information of patients.',
        imageSrc: '/assets/img/projects/project-5-1.png'
      },
      {
        title: 'Dashboard & Analytical Reports',
        description: 'The system integrates with three hospital databases and supports multiple databases within one application.',
        imageSrc: '/assets/img/projects/project-4-3.png'
      },
      {
        title: 'HIMS (Health Care System)',
        description: 'A patient registration system is used to maintain demographic information of patients. The emergency/triage module is used to manage emergency patients. The outpatient department manages scheduling and treatment of non-hospitalized patients.',
        imageSrc: '/assets/img/projects/project-3.png'
      },
  ];

  currentIndex = 0;
  projectsToShow = 3;

  constructor() {}

  // Functions to handle navigation
  nextProjects() {
    this.currentIndex += 1;
    if (this.currentIndex >= this.projects.length) {
      this.currentIndex = 0;
    }
  }

  // Function to handle navigation to the previous set of 1 project
  prevProjects() {
    this.currentIndex -= 1;
    if (this.currentIndex < 0) {
      this.currentIndex = this.projects.length - 1;
    }
  }
}
