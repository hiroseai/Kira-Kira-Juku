$('.hamburger-button').on('click', function (e) {
  $(".hamburger-menu").slideToggle();
});

$('.hamburger-menu a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var header = $('header').height();
  var position = target.offset().top - header;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});

$('.hamburger-menu a[href^="#"]').on('click', function() {
  $('.hamburger-button').click();
  return false;
});

$('.header-nav a[href^="#"]').click(function(){
  var speed = 500;
  var href= $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var header = $('header').height();
  var position = target.offset().top - header;
  $("html, body").animate({scrollTop:position}, speed, "swing");
  return false;
});

/* course
------------------------------------------ */
$('#smarttab').smartTab({
  enableUrlHash: false // タブidにもとづいたURLハッシュの付与を無効
});
