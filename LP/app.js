$(function(){
    // トップ画面背景色変更
    // title01
    setTimeout(function(){
      $('.fv-title01').css('background-position', '0 0');
    }, 800 );
    // title02
    setTimeout(function(){
      $('.fv-title02').css('background-position', '0 0');
    }, 1200 );
    // title03
    setTimeout(function(){
      $('.fv-title03').css('background-position', '0 0');
    }, 2000 );

    let footer_banner = $('.float-banner');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            //バナーの表示
            footer_banner.fadeIn();
        } else {
            //バナーの非表示
            footer_banner.fadeOut();
        }
    });
});