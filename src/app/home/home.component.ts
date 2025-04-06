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
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
   <app-housing-location
        *ngFor="let housingLocation of filteredLocationList"
        [housingLocation]="housingLocation"
      ></app-housing-location>
    </section>
  `,
  styleUrls: ['./home.component.css'],
})

export class HomeComponent {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';

  housingLocationList: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  // new filteredLoctaionList property to hold the filtered list of housing locations
  filteredLocationList: HousingLocation[] = [];

  constructor() {
    //get the list of housing locations from the HousingService and assign it to the housingLocationList property
    this.housingService.getAllHousingLocations().then((locations) => {
      this.housingLocationList = locations;
      // Initialize the filteredLocationList with the full list of housing locations
      this.filteredLocationList = this.housingLocationList;
    });
  }

  filterResults(text: string) {
    // This component is responsible for displaying the list of housing locations and filtering them based on user input.
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return; // If the input text is empty, reset the filteredLocationList to the full list of housing locations
    }

    // Filter the housingLocationList based on the input text and update the filteredLocationList property
    // The filter method creates a new array with all elements that pass the test implemented by the provided function.
    this.filteredLocationList = this.housingLocationList.filter((housingLocation) =>
      housingLocation?.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}

