import { Component } from '@angular/core';
import { url } from 'inspector';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
 public links = [
  { name: 'About us', url: '' },
  { name: 'Our Class', url: '' },
  { name: 'Blog', url: '' },
  { name: 'Contact', url: '' },
 ]

 public resources = [
  {name: 'Support', url: ''},
  {name: 'Privacy policy', url: ''},
  {name: 'Terms & Conditions', url: ''},
 ]

 public icons = [
  {src:'./assets/svg/Facebook.svg', alt: 'Facebook', url: ''},
  {src:'./assets/svg/Twitter.svg', alt: 'Twitter', url: ''},
  {src:'./assets/svg/Instagram.svg', alt: 'Instagram', url: ''},
  {src:'./assets/svg/Linkedin.svg', alt: 'Facebook', url: ''},
  {src:'./assets/svg/Youtube.svg', alt: 'Youtube', url: ''},
 ]
}
