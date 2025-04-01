import {Component} from '@angular/core';
import {HomeComponent} from './home/home.component'; // After creating a new component, import it in the app.compmonent.ts

@Component({
  selector: 'app-root',
  imports: [HomeComponent], // Import the HomeComponent here to use it in the template
  template: `
     <main>
      <header class="brand-name">
        <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true" />
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'homes';
}
