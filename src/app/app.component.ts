import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Months } from './common/months.enum';
import differenceInMonths from 'date-fns/differenceInCalendarMonths'
import { intervalToDuration, formatDuration, eachMonthOfInterval, add, addDays, subDays, differenceInCalendarMonths, getMonth, getDaysInMonth } from 'date-fns';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'shaun-kleyn-profile';

  public years = [];
  public months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

public timeline = [
  {
    id: 1,
    start: new Date(1998, Months.January, 1),
    end: new Date(2002, Months.December, 31),
    title: 'High school',
    description: 'Matriculated',
    percent: 0,
    months: 0
},
  {
  id: 2,
  start: new Date(2003, Months.January, 1),
  end: new Date(2003, Months.December, 31),
  title: 'Deo Volento',
  description: 'Administrator',
  percent: 0,
  months: 0
},
  {
    id: 3,
  start: new Date(2004, Months.January, 1),
  end : new Date (2005, Months.December, 31),
  title : 'Damelin',
  description: 'Administrator',
  percent: 0,
  months: 0
},
  {
    id: 4,
  start : new Date(2007, Months.January, 1),
  end : new Date(2008, Months.December, 31),
  title : 'Carnival Lighting',
  description: 'Administrator',
  percent: 0,
  months: 0
  }, {
    id: 5,
  start: new Date(2010, Months.December, 1),
  end: new Date(2012, Months.December, 31),
  title: 'Avis Luxury Collection',
  description: 'Administrator',
  percent: 0,
  months: 0
  }, {
    id: 6,
  start: new Date(2013, Months.January, 1),
  end: new Date(2015, Months.March, 30),
  title: 'Avis Rent a Car',
  description: 'Administrator',
  percent: 0,
  months: 0
  }, {
    id: 7,
  start: new Date(2015, Months.April, 1),
  end: new Date(2016, Months.June, 30),
  title: 'Avis Rent a Car',
  description: 'Administrator',
  percent: 0,
  months: 0
  }, {
    id: 8,
  start: new Date(2016, Months.July, 1),
  end: new Date(2020, Months.June, 30),
  title: 'Avis Rent a Car',
  description: 'Administrator',
  percent: 0,
  months: 0
  }, {
    id: 9,
  start: new Date(2020, Months.July, 1),
  end: new Date(),
  title: 'Barloworld',
  description: 'Administrator',
  percent: 0,
  months: 0
}
];
  
// public timeline = [
//   {
//     id: 1,
//     start: new Date(2009, Months.January, 1),
//     end: new Date(2010, Months.September, 31),
//     title: 'Supply Chain Service',
//     description: 'Merchendiser',
//     percent: 0,
//     isActive: true,
//     isEntry: true
// },
//   {
//   id: 2,
//   start: new Date(2010, Months.October, 1),
//   end: new Date(2011, Months.August, 31),
//   title: 'Santa Rosa Spur',
//   description: 'Waitron',
//   percent: 0,
//   isActive: true,
//   isEntry: true
// },
//   {
//     id: 3,
//   start: new Date(2011, Months.September, 1),
//   end : new Date (2011, Months.November, 31),
//   title : 'Nautical Mile',
//   description: 'Barman',
//   percent: 0,
//   isActive: true,
//   isEntry: true
// },
//   {
//     id: 4,
//   start : new Date(2011, Months.December, 1),
//   end : new Date(2012, Months.March, 31),
//   title : 'The Kings Steak House',
//   description: 'Store Manager',
//   percent: 0,
//   isActive: true,
//   isEntry: true
//   }, {
//     id: 5,
//   start: new Date(2012, Months.June, 29),
//   end: new Date(2016, Months.March, 31),
//   title: 'PNA Hazeldean',
//   description: 'Receiving Clerk / Supervisor',
//   percent: 0,
//   isActive: true,
//   isEntry: true
//   }, {
//     id: 6,
//   start: new Date(2016, Months.April, 1),
//   end: new Date(2020, Months.July, 30),
//   title: 'DADO Manufacturing',
//   description: 'Storeman / Company Buyer',
//   percent: 0,
//   isActive: true,
//   isEntry: true
//   }
// ];

totalMonths: number = 0;

  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }

  ngOnInit() {

    let yearStart = new Date(Math.min.apply(null, this.timeline.map(x => x.start))).getFullYear();
    let yearEnd = new Date(Math.max.apply(null, this.timeline.map(x => x.end))).getFullYear();
    let date = new Date();
    let startDate = new Date(yearStart, Months.January, 1);
    let endDate = new Date(yearEnd, Months.December + 1, 0);
    console.log('start: ' + startDate)
    console.log('end: ' + endDate)

    for (let y = startDate.getFullYear(); y <= endDate.getFullYear(); y++) {
      this.years.push(y);
    }

    this.timeline[this.timeline.length - 1].end = new Date(date.getFullYear(), Months.December + 1, 0);
    this.totalMonths = this.monthDiff(startDate, endDate);
    this.totalMonths = eachMonthOfInterval({
      start: startDate,
      end: endDate
    }).length;

    console.log(this.totalMonths);

    let previousEndDate: Date;
    for (let i = 0; i < this.timeline.length; i++) {
      
      console.log('this.timeline.length:' + this.timeline.length);
      
      console.log(this.timeline[i].title);
      
      console.log(formatDuration(intervalToDuration({
        start: this.timeline[i].start,
        end: this.timeline[i].end
      })), { format: 'months' });

      console.log(eachMonthOfInterval({
        start: this.timeline[i].start,
        end: this.timeline[i].end
      }).length);


      if (previousEndDate) {
        // let startDate = addDays(previousEndDate, 1)
        // let endDate = this.timeline[i].end;

        console.log({
          i: i,
          previousEndDate: previousEndDate,
          start: this.timeline[i].start,
          end: this.timeline[i].end,
          name: this.timeline[i].title
        });

        //console.log('diff: ' + this.monthDiff(this.timeline[i - 1].end, this.timeline[i].start));
        let intervalStart = previousEndDate;
        var interval = eachMonthOfInterval({
          // start: addDays(intervalStart, 1),
          start: previousEndDate,
          end: this.timeline[i].start,
        });

        var diffMonths = differenceInCalendarMonths(
          this.timeline[i].start,
          previousEndDate
          
        );

        var duration = intervalToDuration({
          start: previousEndDate,
          end: this.timeline[i].start
        })


        if (this.monthDiff(this.timeline[i - 1].end, this.timeline[i].start) > 1) {
          this.timeline.splice(i, 0, {
            id: 0,
            start: addDays(this.timeline[i - 1].end, 1),
            end: subDays(this.timeline[i].start, 1),
            percent: 0,
            title:'',
            description: '',
            months: 0
          });
        }
        
      } else {
        console.log('++++previousEndDate');
        previousEndDate = this.timeline[i].end;
      }
    }
    this.timeline.forEach(x => x.months = eachMonthOfInterval({
      start: x.start,
      end: x.end
    }).length);
    this.timeline.forEach(x => x.percent = (x.months / this.totalMonths)*100);
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

