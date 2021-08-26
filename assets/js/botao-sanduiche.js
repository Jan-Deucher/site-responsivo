$('.bt-menu').click(function (){
    console.log('click');
    $(".menu").removeClass('hide');
    $(".menu").slideToggle(500);
   });