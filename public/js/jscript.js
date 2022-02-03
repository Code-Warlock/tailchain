$(document).ready(()=>{
  $('.dropdown').click(()=>{
    $('.sub-menu').slideToggle();
    $('.dropdown').find('.dropdown-toggler').toggleClass('flip');

  });
  $('.menu-bar').click(()=>{
    $('.navbar').removeClass('hide');
    $('.navbar').addClass('animate__slideInLeft');
    $('.navbar').removeClass('animate__slideOutLeft');
    $('.navbar-toggler').addClass('animate__fadeInUp');

    $('.menu-bar').css('visibility', 'hidden');
    setTimeout(()=>{
      $('.navbar-toggler').addClass('fly-up');
      $('.navbar-toggler').addClass('disappear');
    } , 1000);
    $('.overlay').removeClass('hidden');
    $('.overlay').removeClass('opacity-0');
    $('.overlay').addClass('transition');
    $('.overlay').addClass('opacity-100');


  });
  $('.close').click(()=>{
    $('.navbar').removeClass('animate__slideInLeft');
    $('.navbar').addClass('animate__slideOutLeft');
    $('.navbar-toggler').addClass('animate__fadeInDown');
    setTimeout(()=>{
      $('.navbar-toggler').removeClass('fly-up');
      $('.navbar-toggler').removeClass('disappear');
    } , 1000);
    
    $('.menu-bar').css('visibility' , 'visible');
    $('.overlay').addClass('hidden');
    $('.overlay').addClass('opacity-0');
    $('.overlay').addClass('transition');
    $('.overlay').addClass('opacity-100');
  });
  $('.overlay').click(()=>{
    $('.navbar').removeClass('animate__slideInLeft');
    $('.navbar').addClass('animate__slideOutLeft');
    $('.menu-bar').css('visibility' , 'visible');
    setTimeout(()=>{
      $('.navbar-toggler').removeClass('fly-up');
      $('.navbar-toggler').removeClass('disappear');
    } , 1000);
    $('.navbar-toggler').addClass('animate__fadeInDown');
    $('.overlay').addClass('hidden');
    $('.overlay').addClass('opacity-0');
    $('.overlay').addClass('transition');
    $('.overlay').addClass('opacity-100');
  });
});