import { Component } from '@angular/core';
import { LineTextComponent } from '../line-text/line-text.component';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  imports: [LineTextComponent],
  templateUrl: './testimonial.component.html',
  styleUrl: './testimonial.component.css',
})
export class TestimonialComponent {
  public testimonials = [
    {
      fullName: 'Michael Wong',
      specialization: 'UI/UX Design Student',
      stars: '4.9',
      description:
        'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!',
    },
    {
      fullName: 'Avril Song',
      specialization: 'Web Development Student',
      stars: '4.8',
      description:
        'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!',
    },
    {
      fullName: 'Jeane Wood',
      specialization: 'Data Science Student',
      stars: '5.0',
      description:
        'Empower yourself with the knowledge and skills gained through online education! Empower yourself with the knowledge and skills gained through online education!',
    },
  ];
}
