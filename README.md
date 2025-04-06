# AngularFirstApp

## File Structure

```
.gitignore
angular.json
db.json
package.json
README.md
tsconfig.app.json
tsconfig.json
src/
  favicon.ico
  index.html
  main.ts
  styles.css
  app/
    app-routing.module.ts
    app.component.ts
    app.component.css
    app.config.ts
    housing.service.ts
    housinglocation.ts
    routes.ts
    details/
        details.component.ts
        details.component.css
    home/
        home.component.ts
        home.component.css
    housing-location/
        housing-location.component.ts
        housing-location.component.css
  assets/
    angular.svg
    location-pin.svg
    logo.svg
```

## Methods and Classes

### Key Classes
- **AppComponent**: Root component of the application.
- **DetailsComponent**: Displays details of a housing location.
- **HomeComponent**: Handles the home page and search functionality.
- **HousingLocationComponent**: Displays individual housing location details.
- **HousingService**: Provides methods to fetch housing data and submit applications.

### Key Methods
- **HousingService.getHousingLocations()**: Fetches the list of housing locations.
- **HousingService.submitApplication(details)**: Submits an application with the provided details.

## Technologies Used

- **Angular**: Framework for building the application.
- **TypeScript**: Programming language for Angular development.
- **RxJS**: Reactive programming library.
- **JSON Server**: Mock backend server for `db.json`.

## How to Run the Server with `db.json`

1. Install JSON Server globally:
   ```bash
   npm install -g json-server
   ```
2. Start the server:
   ```bash
   json-server --watch db.json
   ```
3. The server will run at `http://localhost:3000`.

## How to Launch the Site

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the Angular development server:
   ```bash
   npm start
   ```
3. Open your browser and navigate to `http://localhost:4200`.


## Relevant Links
- [Angular First-App Tutorial](https://angular.dev/tutorials/first-app)