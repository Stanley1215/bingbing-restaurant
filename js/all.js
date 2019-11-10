$(document).ready(function(){
  var isShow = false;
	$('.showmenu').on('click',  function(e){
	      e.preventDefault();
        $('body').toggleClass('menu-show');
        $('.block').fadeToggle(500);
    });

 $('.scrollTop').click(function(e){
    e.preventDefault();
    var target = $(this).attr('href');
    var targetPos = $(target).offset().top;
    $('html, body').animate({scrollTop: targetPos}, 1000);
  });
  
  $(window).scroll(function(){
    var scrollPos = $(window).scrollTop();
    var windowHeight = $(window).height();
    
    $('.scrollTop').each(function(){
      var target = $(this).attr('href'); 
      var targetPos = $(target).offset().top;
      var targetHeight = $(target).outerHeight();
      if (targetPos - 1 <= scrollPos && (targetPos + targetHeight) > scrollPos){
        $('.scrollTop').removeClass('active')
        $(this).addClass('active');
      } else {
        $(this).removeClass('active')
      }
    });
});
});
  