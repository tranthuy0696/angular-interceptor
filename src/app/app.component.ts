import { Component } from '@angular/core';
import { FeatureHttpClient } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-tour-of-heroes';
  constructor(public s: FeatureHttpClient) {}
  ngOnInit() {
    this.s.testAPI().subscribe((result) => {
      console.log('m  >>>', result);
    });
  }
}
