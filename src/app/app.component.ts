import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shaun-kleyn-profile';
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
}
