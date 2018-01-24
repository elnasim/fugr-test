$(function () {

  $(".toggle-mnu").click(function () {
    $(this).toggleClass("on");
    $(".header-nav").slideToggle();
    return false;
  });

});
