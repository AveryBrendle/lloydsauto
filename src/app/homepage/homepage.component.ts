import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
      var i;
      let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; 
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1} 
      slides[slideIndex-1].style.display = "block"; 
      setTimeout(showSlides, 5000); // Change image every 2 seconds
    }
  }

}
