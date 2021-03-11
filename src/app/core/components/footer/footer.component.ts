import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
  <footer class='footer'>
  <div class='container content has-text-centered'>
    <p> Made by Jonathan Nuno </p>
  </div>
  </footer>
  `,
  styles: [`
    .footer {
      padding: 1rem 1.5rem 1rem;
    }
  `]
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
