$(function() {
    $('#navbarToggle').blur(function(event) {
      var screenWidth = window.innerWidth;
      if (screenWidth < 992) {
        $('#navbarNav').collapse('hide');
      }
    });
});

$(document).ready(function() {
  $("#owl-demo").owlCarousel({
      navigation: true,
      responsive:{
        0:{
          items: 1
        },
        500:{
          items: 2
        },
        576:{
          items: 3
        },
        768:{
          items: 4
        },
        992:{
          items: 5
        },
        1200:{
          items: 6
        }
      },
  });

  $('.prev').click(function() {
      $("#owl-demo").trigger('prev.owl.carousel');
  })
  $('.next').click(function() {
      $("#owl-demo").trigger('next.owl.carousel');
  })
});


function readMoreLess(book) {
  let moreText = document.querySelector(`.book-content[data-book="${book}"] .more`);
  let btnText = document.querySelector(`.book-content[data-book="${book}"] .btn-read`);

  if (btnText.textContent === "read less") {
    btnText.innerHTML = "...read more";
    moreText.style.display = "none";
  } else {
    btnText.innerHTML = "read less";
    moreText.style.display = "inline";
  }
}