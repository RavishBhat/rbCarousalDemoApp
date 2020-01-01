import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rb-carousel-container',
  templateUrl: './rb-carousel-container.component.html',
  styleUrls: ['./rb-carousel-container.component.scss']
})
export class RbCarouselContainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  imageArray= [
    {CaptionText:'The Temple',imageUrl:'https://ravishimages.s3.ap-south-1.amazonaws.com/myImages/temple.jpg'},
    {CaptionText:'Nature',imageUrl:'https://ravishimages.s3.ap-south-1.amazonaws.com/myImages/nature.JPG'},  
    {CaptionText:'The stone road',imageUrl:'https://ravishimages.s3.ap-south-1.amazonaws.com/myImages/beach.jpg'},
    {CaptionText:'The Hilltop',imageUrl:'https://ravishimages.s3.ap-south-1.amazonaws.com/myImages/hill.jpg'},
    {CaptionText:'Wings',imageUrl:'https://ravishimages.s3.ap-south-1.amazonaws.com/myImages/wings.jpg'}      
  ];

  carouselSettings = {
    autoTransition: true,
    transitionDuration:5000,
    animation:'flipDiagonal',
    displayImageCount: true,
    loopCarousel: true
  }

  corouselEvent(data){

    if(data) {
      let obj= {CaptionText:'phot0',imageUrl:'https://images3.alphacoders.com/595/595064.jpg'};
     // this.imageArray.push(obj);
    }
  }

  transitionStart(data) {
    console.log('transitionStart',data);
  }

  transitionEnd(data) {
    console.log('transitionEnd',data);
  }

  onNextSlide(data) {
    console.log('NextSlide',data);
  }

  onPreviousSlide(data) {
    console.log('PreviousSlide',data);
  }
}
