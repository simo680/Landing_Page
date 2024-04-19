import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  public datas =  [ 
    {
      number: '15',
      symbol: '+',
      name: 'Years of experience'
    },
    {
      number: '100',
      symbol: 'k',
      name: 'Students worldwide'
    },
    {
      number: '45',
      symbol: '+',
      name: 'Class subjects'
    },
    {
      number: '98',
      symbol: '%',
      name: 'Student satisfactions'
    }
  ]
}
