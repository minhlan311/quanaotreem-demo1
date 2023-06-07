import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ban-may-tinh';
  product={
    name: 'Hat',
    quatity: 200,
    price: 500
  }
}
