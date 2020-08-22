import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this tree while vacationing',
    },
    {
      title: 'Snowy Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountailover',
      content: 'A snowy mountain in the west',
    },
    {
      title: 'Neat Tree',
      imageUrl: 'assets/biking.jpeg',
      username: 'cycling',
      content: 'I dic some exercise today',
    },
  ];
}
