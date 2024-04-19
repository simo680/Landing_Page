import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-text',
  standalone: true,
  imports: [],
  templateUrl: './line-text.component.html',
  styleUrl: './line-text.component.css',
})
export class LineTextComponent {
  @Input() namePage: string;
}
