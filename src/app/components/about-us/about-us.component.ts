import { Component } from '@angular/core';
import { MoreButtonComponent } from '../../UI/more-button/more-button.component';
import { LineTextComponent } from '../line-text/line-text.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [MoreButtonComponent, LineTextComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
