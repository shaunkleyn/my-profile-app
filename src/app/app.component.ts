import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shaun-kleyn-profile';

  public years = [];
  public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

public timeline = [
  {
    id: 1,
    start: new Date(1998, 1, 1),
    end: new Date(2002, 12, 31),
    title: 'High school',
    description: 'Matriculated',
    percent: 0,
    isActive: true,
    isEntry: true
},
  {
  id: 2,
  start: new Date(2003, 1, 1),
  end: new Date(2003, 12, 31),
  title: 'Deo Volento',
  description: 'Administrator',
  percent: 0,
  isActive: true,
  isEntry: true
},
  {
    id: 3,
  start: new Date(2004, 1, 1),
  end : new Date (2005, 12, 31),
  title : 'Damelin',
  description: 'Administrator',
  percent: 0,
  isActive: true,
  isEntry: true
},
  {
    id: 4,
  start : new Date(2007, 1, 1),
  end : new Date(2008, 12, 31),
  title : 'Carnival Lighting',
  description: 'Administrator',
  percent: 0,
  isActive: true,
  isEntry: true
  }, {
    id: 5,
  start: new Date(2010, 11, 29),
  end: new Date(2012, 12, 31),
  title: 'Avis Luxury Collection',
  description: 'Administrator',
  percent: 0,
  isActive: true,
  isEntry: true
  }, {
    id: 6,
  start: new Date(2013, 1, 1),
  end: new Date(2014, 4, 30),
  title: 'Avis Rent a Car',
  description: 'Administrator',
  percent: 0,
  isActive: true,
  isEntry: true
  }, {
    id: 7,
  start: new Date(2014, 5, 1),
  end: new Date(2016, 1, 30),
  title: 'Avis Rent a Car',
  description: 'Administrator',
  percent: 0,
  isActive: true,
  isEntry: true
  }, {
    id: 8,
  start: new Date(2016, 2, 1),
  end: new Date(2020, 6, 30),
  title: 'Avis Rent a Car',
  description: 'Administrator',
  percent: 0,
  isActive: true,
  isEntry: true
  }, {
    id: 9,
  start: new Date(2020, 7, 1),
  end: new Date(),
  title: 'Barloworld',
  description: 'Administrator',
  percent: 0,
  isActive: true,
  isEntry: true
}
];

totalMonths: number = 0;

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
    for (let y = 1998; y <= 2020; y++) {
      this.years.push(y);
    }

    this.totalMonths = this.monthDiff(this.timeline[0].start, new Date());
    for (let i = 0; i < this.timeline.length; i++) {
      if (i > 0) {
        if (this.monthDiff(this.timeline[i - 1].end, this.timeline[i].start) > 1) {
          this.timeline.splice(i, 0, {
            id: 0,
            start: this.timeline[i - 1].end,
            end: this.timeline[i].start,
            percent: 0,
            title:'',
            description: '',
            isActive: false,
            isEntry: false
          });
        }
      }
    }
    this.timeline.forEach(x => x.percent = (this.monthDiff(x.start, x.end) / this.totalMonths)*100);
    console.log(this.timeline);

  }

  monthDiff(d1, d2) {
    var months;
    months = (d2.getFullYear() - d1.getFullYear()) * 12;
    months -= d1.getMonth();
    months += d2.getMonth();
    return months <= 0 ? 0 : months;
}
}

