import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  constructor(private _config: NgbCarouselConfig) {}
  sliderItems: any[] = [
    {
      name: 'Order online and pickup from your nearest',
      img: 'assets/agent.jpg',
      desc: 'assets/agentnew.png',
    },
    {
      name: 'Order online and pickup from your nearest',
      img: 'assets/ban3.jpg',
      desc: 'assets/appHub.png',
    },
    {
      name: 'Order online and get easy',
      img: 'assets/background3.jpeg',
      desc: 'assets/hd.png',
    },
  ];

  ngOnInit(): void {}
}
