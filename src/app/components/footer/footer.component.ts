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
  {src:'assets/Facebook.svg', alt: 'Facebook', url: ''},
  {src:'assets/Twitter.svg', alt: 'Twitter', url: ''},
  {src:'assets/Instagram.svg', alt: 'Instagram', url: ''},
  {src:'assets/Linkedin.svg', alt: 'Facebook', url: ''},
  {src:'assets/Facebook.svg', alt: 'Facebook', url: ''},
 ]
}
