$('.hamburger-button').on('click', function (e) {
  $(".hamburger-menu").slideToggle();
});

$('.hamburger-menu a[href^="#"]').on('click', function() {
  $('.hamburger-button').click();
  });

/* course
------------------------------------------ */
$('#smarttab').smartTab({
  enableUrlHash: false 
});
