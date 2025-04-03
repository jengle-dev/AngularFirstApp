import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing.service';
import { HousingLocation } from '../housinglocation';

@Component({
  selector: 'app-details',
  template: `
    <article>
      <img
        class="listing-photo"
        [src]="housingLocation?.photo"
        alt="Exterior photo of {{ housingLocation?.name }}"
        crossorigin
      />
      <section class="listing-description">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">{{ housingLocation?.city }}, {{ housingLocation?.state }}</p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this housing location</h2>
        <ul>
          <li>Units available: {{ housingLocation?.availableUnits }}</li>
          <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
          <li>Does this location have laundry: {{ housingLocation?.laundry }}</li>
        </ul>
      </section>
    </article>
  `,
  styleUrls: ['./details.component.css'],
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute); // Inject the ActivatedRoute service to access route parameters
  housingService = inject(HousingService); // Inject the HousingService to access housing location data
  housingLocationId: number; // Declare a variable to hold the housing location ID
  housingLocation: HousingLocation | undefined; // Declare a variable to hold the housing location data

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params['id']); // Convert the 'id' parameter to a number
    this.housingLocation = this.housingService.getHousingLocationById(this.housingLocationId); // Fetch the housing location details
  }
}
