import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import routeConfig from './routes'; // Import the route configuration

@NgModule({
  imports: [RouterModule.forRoot(routeConfig)], // Use the imported routeConfig
  exports: [RouterModule],
})
export class AppRoutingModule {}