$(document).ready(function(){
  $(".carousel").carousel({
    interval: 6000
  });

  //nice scroll 
  $("body").niceScroll();

  //Show color option when click on the gear
  $(".check-gear").click(function() {
    $(".color-option").fadeToggle();
  });
  
  //change defalt color 
  var colorLi = $(".color-option ul li");
  
  colorLi
    .eq(0).css("backgroundColor","rgb(103, 209, 223)").end()
    .eq(1).css("backgroundColor","rgb(216, 53, 188)").end()
    .eq(2).css("backgroundColor","rgb(99, 197, 151)").end()
    .eq(3).css("backgroundColor","rgb(243, 91, 91)").end()
    .eq(4).css("backgroundColor","rgb(99, 76, 231)");

  colorLi.click(function() {

    $("link[href *='theme']").attr("href", $(this).attr("data-value"));
  });  

  var scrollButton = $("#scroll-top");

  $(window).scroll(function () {

    $(this).scrollButton >= 700  ? scrollButton.show() : scrollButton.hide();
    
  });

  scrollButton.click(function () {

    $("html, body").animate({scrollTop: 0}, 600);
  })
});

// loding screen
// $(window).load(function () {
//   $(".loading-overlay, .loading-overlay .spinner").fadeOut(500);
// });