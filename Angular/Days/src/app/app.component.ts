import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Days';
  parentData: string = 'Hello from the parent';
  parentDataFromLogin = '';
  GetData(data: any) {
    this.parentDataFromLogin = data;
  }
}
