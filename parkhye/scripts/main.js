//모바일 네비 열기
function MobileNavOpen(mobileOpen) {
    $('.header-nav').addClass('active');
};
//모바일 네비 닫기
function MobileNavClose(mobileClose) {
    $('.header-nav').removeClass('active');
};
//맨위로 가기
function GotoTop() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
};
//섹션이동
$('.header-nav ul li a').on('click', function() {  
    $('html, body').animate({scrollTop: $(this.hash).offset().top - 50}, 1000);
    return false;
});
//스크롤 시 헤더 active 생성
let header = $('.header');

    $(window).scroll(function(e){
        if(header.offset().top !== 0){
            if(!header.hasClass('active')){
                header.addClass('active');
            }
        }else{
            header.removeClass('active');
        }
    });
