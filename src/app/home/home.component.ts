import { Component, inject } from '@angular/core'; // Import the Component decorator from Angular core and inject function
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location.component'; // Import the HousingLocationComponent
import { HousingLocation } from '../housinglocation';
import { HousingService } from '../housing.service'; // Import the HousingService

@Component({
  selector: 'app-home',
  imports: [CommonModule, HousingLocationComponent], // Import the HousingLocationComponent here to use it in the template
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-housing-location
      *ngFor="let housingLocation of housingLocationList"
      [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
 
}

