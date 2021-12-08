import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'class-a26';
  ids=[
    10,17,18,12,19,20
  ];
  color="blue";
  textcolor="red";
  styleColor="newfont";
  dateExample=Date.now();
}
