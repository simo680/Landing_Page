import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-more-button',
  standalone: true,
  imports: [],
  templateUrl: './more-button.component.html',
  styleUrl: './more-button.component.css',
})
export class MoreButtonComponent {
  @Input() title: string;
  @Input() background: string;
}
