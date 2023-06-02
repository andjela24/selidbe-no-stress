import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() { }

  prevScrollPos = window.pageYOffset;
  visible = true;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const currentScrollPos = window.pageYOffset;
    const isVisible = this.prevScrollPos > currentScrollPos;
    this.prevScrollPos = currentScrollPos;
    this.visible = isVisible;
  }

  scrollTo(id: string) {
    console.log(`scrolling to ${id}`);
    let el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
  }

  toggleNavbar() {
    const navbar = document.getElementById('navbarNav');
    if (navbar) {
      navbar.classList.toggle('show');
    } 
  }

  handlePhoneClick() {
    window.open('tel:+381677000344', '_blank');
  }
  
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faPhone = faPhone;
}
