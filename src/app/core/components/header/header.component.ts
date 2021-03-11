import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <div class='navbar is-dark'>
  <!-- logo -->
    <div class='navbar-brand'>
      <a class='navbar-item' routerLink='/'>
      <img src='/assets/img/ang-logo.png'>
        NGULAR
      </a>
    </div>

    <!-- menu -->
    <div class='navbar-menu is-active'>
      <div class='navbar-end'>
        <a class='navbar-item' routerLink='/'>Home</a>
        <a class='navbar-item' routerLink='/contact'>Contact</a>
        <a class='navbar-item' routerLink='/users'>Users</a>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
