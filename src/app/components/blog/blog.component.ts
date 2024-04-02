import { Component } from '@angular/core';
import { MoreButtonComponent } from '../../UI/more-button/more-button.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MoreButtonComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
