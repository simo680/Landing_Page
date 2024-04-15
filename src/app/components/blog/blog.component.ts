import { Component } from '@angular/core';
import { MoreButtonComponent } from '../../UI/more-button/more-button.component';
import { LineTextComponent } from '../line-text/line-text.component';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [MoreButtonComponent, LineTextComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
  public articles = [
    {
      src: 'assets/img/WatchMan.png',
      name: 'Tom Kennedy',
      date: 'Feb 23, 2024',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      src: 'assets/img/LaptopMan.png',
      name: 'Tom Kennedy',
      date: 'Feb 23, 2024',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
    {
      src: 'assets/img/WomanMoment.png',
      name: 'Tom Kennedy',
      date: 'Feb 23, 2024',
      text: 'Lorem ipsum dolor sit amet consectetur.',
    },
  ];
}
