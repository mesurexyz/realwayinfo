
//ÏÂÀ­²Ëµ¥
$(function(){
 $("ul#menu>li:has(ul)").hover( 
  function(){ 
   $(this).children('a').addClass('red').end().find('ul').fadeIn(400);
  },
  function(){
   $(this).children('a').removeClass('red').end().find('ul').fadeOut(400);
  }
 );
});