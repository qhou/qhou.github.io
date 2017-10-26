window.onload

var slideIndex = 1;
showSlides(slideIndex);

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName('slideshow');
  //after last page, go back to page 1
  if (n > slides.length) {
    slideIndex = 1;
  }
  else if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";

}
var modal;
var txt;
var span;

function setDeveloper() {
  // get the modal
  modal = document.getElementById('develop-container');
  // get the text that opens the modal
  txt = document.getElementById("develop-intro");
  // get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];

  // when the user clicks on the text, open the modal
  txt.onclick = function () {
    modal.style.display = "block";
  }
  // when the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  // when the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function setDesign() {
  // get the modal
  modal = document.getElementById('design-container');
  // get the text that opens the modal
  txt = document.getElementById("design-intro");
  // get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];

  // when the user clicks on the text, open the modal
  txt.onclick = function () {
    modal.style.display = "block";
  }
  // when the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  // when the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function setCreate() {
  // get the modal
  modal = document.getElementById('create-container');
  // get the text that opens the modal
  txt = document.getElementById("create-intro");
  // get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];

  // when the user clicks on the text, open the modal
  txt.onclick = function () {
    modal.style.display = "block";
  }
  // when the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  // when the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

function setExplore() {
  // get the modal
  modal = document.getElementById('explore-container');
  // get the text that opens the modal
  txt = document.getElementById("explore-intro");
  // get the <span> element that closes the modal
  span = document.getElementsByClassName("close")[0];

  // when the user clicks on the text, open the modal
  txt.onclick = function () {
    modal.style.display = "block";
  }
  // when the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }
  // when the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}
