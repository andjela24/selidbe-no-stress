import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faStar, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  prevScrollPos = window.pageYOffset;
  visible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    const isVisible = this.prevScrollPos > currentScrollPos;
    this.prevScrollPos = currentScrollPos;
    this.visible = isVisible;
  }
  handlePhoneClick() {
    window.open('tel:060123456', '_blank');
  }
  faStar = faStar;
  faCheckCircle = faCheckCircle;
}
