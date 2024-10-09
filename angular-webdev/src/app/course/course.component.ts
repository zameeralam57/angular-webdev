import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-course',
  standalone: true,
  imports: [CommonModule, RouterModule,RouterLink],
  templateUrl: './course.component.html',
  styleUrl: './course.component.css'
})
export class CourseComponent {
  constructor() { 
    console.log('Course Component Loaded');
  }

  ngOnInit(): void {
    console.log('ngOnInit - ComponentOne Initialized');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit - View in ComponentOne Initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy - ComponentOne Destroyed');
  }


}
