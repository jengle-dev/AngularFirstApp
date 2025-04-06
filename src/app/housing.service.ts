import { Injectable } from '@angular/core';
import { HousingLocation } from './housinglocation'; // Import the HousingLocation model
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  readonly baseUrl = 'https://angular.dev/assets/images/tutorials/common';
  
  // db.json file is used to store the list of housing locations and their properties.
  url = 'http://localhost:3000/locations'; // URL to web api
  
  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? {};
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  // Function to submit an application with the provided details for the Form
  submitApplication(firstName: string, lastName: string, email: string): void {
    console.log(`Application received from ${firstName} ${lastName}. Email: ${email}`);
  }
    
  constructor() { }
}
