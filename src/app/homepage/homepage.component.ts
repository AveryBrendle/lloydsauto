import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  // constructor() { }

  ngOnInit() {
    var slideIndex = 0;
    showSlides();
    var slides, dots;

    function showSlides() {
      var i;
      slides = document.getElementsByClassName("mySlides");
      dots = document.getElementsByClassName("dot");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) { slideIndex = 1 }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += "active";
      setTimeout(showSlides, 5000); // Change image every 2 seconds

      function plusSlides(position) {
        slideIndex += position;
        if (slideIndex > slides.length) { slideIndex = 1 }
        else if (slideIndex < 1) { slideIndex = slides.length }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        // for (i = 0; i < dots.length; i++) {
        //     dots[i].className = dots[i].className.replace(" active", "");
        // }
        slides[slideIndex - 1].style.display = "block";
        // dots[slideIndex-1].className += " active";
      }

      function currentSlide(index) {
        if (index > slides.length) { index = 1 }
        else if (index < 1) { index = slides.length }
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[index - 1].style.display = "block";
        dots[index - 1].className += " active";
      }
    }
  }
}
