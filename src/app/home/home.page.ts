import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {



  constructor() { }


  ngOnInit() {

    let figures = [{
      id: 0, des: 'html'
    }, {
      id: 1, des: 'css'
    },
    { id: 2, des: 'ts' },
    { id: 3, des: 'js' },
    { id: 4, des: 'angular' },
    { id: 5, des: 'react' }
    ]
    console.log(figures);
  }


}
