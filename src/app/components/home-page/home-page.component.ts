import { Component, OnInit } from '@angular/core';
import { Result } from 'src/app/interfaces/donut';
import { DonutService } from 'src/app/services/donut.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  title = 'Donut shop';
  today = new Date();
  donutResults: Result[] = [];

  constructor(private service:DonutService) { }

  ngOnInit() {
    this.getAvailableDonuts();
  }

  getAvailableDonuts():void{
    this.service.getDonutList().subscribe((data) =>{
        this.donutResults = data;
    });
  }

}
