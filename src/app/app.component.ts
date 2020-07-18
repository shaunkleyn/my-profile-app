import { Component } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shaun-kleyn-profile';

public timeline = [
  { 
    start: new Date(1998, 1, 1),
    end: new Date(2002, 12, 31),
    title: 'school',
    percent: 0,
    isActive: true
},
{
  start: new Date(2003, 1, 1),
  end: new Date(2003, 12, 31),
  title: 'work',
  percent: 0,
  isActive: true
},
{
  start: new Date(2004, 1, 1),
  end : new Date (2005, 12, 31),
  title : 'college',
  percent: 0,
  isActive: true
},
{
  start : new Date(2007, 1, 1),
  end : new Date(2008, 12, 31),
  title : 'work',
  percent: 0,
  isActive: true
}, {
  start: new Date(2010, 11, 29),
  end: new Date(2012, 12, 31),
  title: 'admin',
  percent: 0,
  isActive: true
}, {
  start: new Date(2013, 1, 1),
  end: new Date(2014, 4, 30),
  title: 'it1',
  percent: 0,
  isActive: true
}, {
  start: new Date(2014, 5, 1),
  end: new Date(2016, 1, 30),
  title: 'it2',
  percent: 0,
  isActive: true
}, {
  start: new Date(2016, 2, 1),
  end: new Date(2020, 6, 30),
  title: 'it3',
  percent: 0,
  isActive: true
}, {
  start: new Date(2020, 7, 1),
  end: new Date(),
  title: 'it4',
  percent: 0,
  isActive: true
}
];

totalMonths: number = 0;

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
    this.totalMonths = this.monthDiff(this.timeline[0].start, new Date());
    for (let i = 0; i < this.timeline.length; i++) {
      if (i > 0) {
        if (this.monthDiff(this.timeline[i - 1].end, this.timeline[i].start) > 1) {
          this.timeline.splice(i, 0, {
            start: this.timeline[i - 1].end,
            end: this.timeline[i].start,
            percent: 0,
            title:'',
            isActive: false
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

