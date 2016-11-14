var Obtn = $('.btn');
var open = true;
Obtn.on('click', function() {
    open = !open;
    if (open) {
        $('.btn').html('<span class="glyphicon glyphicon-music"></span>');
        document.getElementById('bgsound').play();
    } else {
        $('.btn').html('<span class="glyphicon glyphicon-remove"></span>');
        document.getElementById('bgsound').pause();
    }
});

/*给页面添加 touch 事件*/
document.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, false);

var s1 = $('.s_1'),
    s2 = $('.s_2'),
    s3 = $('.s_3'),
    s4 = $('.s_4'),
    s5 = $('.s_5'),
    s6 = $('.s_6'),
    s7 = $('.s_7'),
    s8 = $('.s_8'),
    s9 = $('.s_9'),
    s10 = $('.s_10'),
    s11 = $('.s_11');

/*首次加载给第一个家动画*/
/*  s1.addClass('moveFromTop');*/
s1.addClass('show');
s1.addClass('curren');
$('.s_1 .textBox').addClass('moveFromBottom');
$('.s_1 .imgBox .img01').addClass('moveCircle');
$('.s_1 .imgBox .img02').addClass('moveFromLeft');

s1.swipeUp(function() {
    s1.removeClass('show');
    s1.addClass('hidden');
    s1.removeClass('curren');

    /* s1.removeClass('moveFromBottom');*/

    s2.removeClass('hidden');
    s2.addClass('show');
    s2.addClass('curren');
    /*s2.addClass('moveFromBottom');*/

    $('.s_2 .textBox').addClass('moveFromTop');
    $('.s_2 .imgBox .img01').addClass('moveCircle');
    $('.s_2 .imgBox .img02').addClass('moveFromRight');
});

s2.swipeUp(function() {
    s2.removeClass('show');
    s2.addClass('hidden');
    s2.removeClass('curren');
    /*   s2.removeClass('moveFromBottom');*/

    s3.removeClass('hidden');
    s3.addClass('show');
    s3.addClass('curren');
    /*   s3.addClass('moveFromBottom');*/
    $('.s_3 .textBox').addClass('moveFromBottom');
    $('.s_3 .imgBox .img01').addClass('moveCircle');
    $('.s_3 .imgBox .img02').addClass('moveFromRight');
});

s2.swipeDown(function() {
    s2.removeClass('show');
    s2.addClass('hidden');
    s2.removeClass('curren');
    /*s2.removeClass('moveFromBottom');*/

    s1.removeClass('hidden');
    s1.addClass('show');
    s1.addClass('curren');
    /*s3.addClass('moveFromBottom');*/
    $('.s_1 .textBox').addClass('moveFromBottom');
    $('.s_1 .imgBox .img01').addClass('moveCircle');
    $('.s_1 .imgBox .img02').addClass('moveFromRight');
});

s3.swipeUp(function() {
    s3.removeClass('show');
    s3.addClass('hidden');
    s3.removeClass('curren');
    /*s3.removeClass('moveFromBottom');
     */
    s4.removeClass('hidden');
    s4.addClass('show');
    s4.addClass('curren');
    /*s4.addClass('moveFromBottom');*/
    $('.s_4 .textBox').addClass('moveFromLeft');
    $('.s_4 .imgBox .img01').addClass('moveFromRight');
});
s3.swipeDown(function() {
    s3.removeClass('show');
    s3.addClass('hidden');
    s3.removeClass('curren');
    /*s3.removeClass('moveFromBottom');
     */
    s2.removeClass('hidden');
    s2.addClass('show');
    s2.addClass('curren');
    /*s2.addClass('moveFromBottom');*/
    $('.s_2 .textBox').addClass('moveFromLeft');
    $('.s_2 .imgBox .img01').addClass('moveFromRight');
});

s4.swipeUp(function() {
    s4.removeClass('show');
    s4.addClass('hidden');
    s4.removeClass('curren');
    /*s4.removeClass('moveFromBottom');*/

    s5.removeClass('hidden');
    s5.addClass('show');
    s5.addClass('curren');
    /*s5.addClass('moveFromBottom');*/
    $('.s_5 .textBox').addClass('moveFromBottom');
    $('.s_5 .imgBox .img01').addClass('moveCircle');
    $('.s_5 .imgBox .img02').addClass('moveFromRight');
});
s4.swipeDown(function() {
    s4.removeClass('show');
    s4.addClass('hidden');
    s4.removeClass('curren');
    /*s4.removeClass('moveFromBottom');*/

    s3.removeClass('hidden');
    s3.addClass('show');
    s3.addClass('curren');
    /*s3.addClass('moveFromBottom');*/
    $('.s_3 .textBox').addClass('moveFromBottom');
    $('.s_3 .imgBox .img01').addClass('moveCircle');
    $('.s_3 .imgBox .img02').addClass('moveFromRight');
});

s5.swipeUp(function() {
    s5.removeClass('show');
    s5.addClass('hidden');
    s5.removeClass('curren');
    /*s5.removeClass('moveFromBottom');*/

    s6.removeClass('hidden');
    s6.addClass('show');
    s6.addClass('curren');
    /*s6.addClass('moveFromBottom');*/
    $('.s_6 .textBox').addClass('moveFromBottom');
    $('.s_6 .imgBox .img01').addClass('moveCircle');
    $('.s_6 .imgBox .img02').addClass('moveFromRight');
});
s5.swipeDown(function() {
    s5.removeClass('show');
    s5.addClass('hidden');
    s5.removeClass('curren');
    /*s5.removeClass('moveFromBottom');*/

    s4.removeClass('hidden');
    s4.addClass('show');
    s4.addClass('curren');
    /*s4.addClass('moveFromBottom');*/
    $('.s_4 .textBox').addClass('moveFromBottom');
    $('.s_4 .imgBox .img01').addClass('moveCircle');
    $('.s_4 .imgBox .img02').addClass('moveFromRight');
});


s6.swipeUp(function() {
    s6.removeClass('show');
    s6.addClass('hidden');
    s6.removeClass('curren');
    /*s6.removeClass('moveFromBottom');*/

    s7.removeClass('hidden');
    s7.addClass('show');
    s7.addClass('curren');
    /*s7.addClass('moveFromBottom');*/
    $('.s_7 .textBox').addClass('moveFromBottom');
    $('.s_7 .imgBox .img01').addClass('moveCircle');
    $('.s_7 .imgBox .img02').addClass('moveFromRight');
});
s6.swipeDown(function() {
    s6.removeClass('show');
    s6.addClass('hidden');
    s6.removeClass('curren');
    /*s6.removeClass('moveFromBottom');*/

    s5.removeClass('hidden');
    s5.addClass('show');
    s5.addClass('curren');
    /*s5.addClass('moveFromBottom');*/
    $('.s_5 .textBox').addClass('moveFromBottom');
    $('.s_5 .imgBox .img01').addClass('moveCircle');
    $('.s_5 .imgBox .img02').addClass('moveFromRight');
});

s7.swipeUp(function() {
    s7.removeClass('show');
    s7.addClass('hidden');
    s7.removeClass('curren');
    /*s7.removeClass('moveFromBottom');*/

    s8.removeClass('hidden');
    s8.addClass('show');
    s8.addClass('curren');
    /*s8.addClass('moveFromBottom');*/
    $('.s_8 .textBox').addClass('moveFromBottom');
    $('.s_8 .imgBox .img01').addClass('moveCircle');
    $('.s_8 .imgBox .img02').addClass('moveFromRight');
});
s7.swipeDown(function() {
    s7.removeClass('show');
    s7.addClass('hidden');
    s7.removeClass('curren');
    /*s7.removeClass('moveFromBottom');*/

    s6.removeClass('hidden');
    s6.addClass('show');
    s6.addClass('curren');
    /*s6.addClass('moveFromBottom');*/
    $('.s_6 .textBox').addClass('moveFromBottom');
    $('.s_6 .imgBox .img01').addClass('moveCircle');
    $('.s_6 .imgBox .img02').addClass('moveFromRight');
});
s8.swipeUp(function() {
    s8.removeClass('show');
    s8.addClass('hidden');
    s8.removeClass('curren');
    /*s8.removeClass('moveFromBottom');*/

    s9.removeClass('hidden');
    s9.addClass('show');
    s9.addClass('curren');
    /*s9.addClass('moveFromBottom');*/
    $('.s_9 .textBox').addClass('moveFromBottom');
    $('.s_9 .imgBox .img01').addClass('moveCircle');
    $('.s_9 .imgBox .img02').addClass('moveFromRight');
});
s8.swipeDown(function() {
    s8.removeClass('show');
    s8.addClass('hidden');
    s8.removeClass('curren');
    /*s8.removeClass('moveFromBottom');*/

    s7.removeClass('hidden');
    s7.addClass('show');
    s7.addClass('curren');
    /*s7.addClass('moveFromBottom');*/
    $('.s_7 .textBox').addClass('moveFromBottom');
    $('.s_7 .imgBox .img01').addClass('moveCircle');
    $('.s_7 .imgBox .img02').addClass('moveFromRight');
});

s9.swipeUp(function() {
    s9.removeClass('show');
    s9.addClass('hidden');
    s9.removeClass('curren');
    /*s9.removeClass('moveFromBottom');*/

    s10.removeClass('hidden');
    s10.addClass('show');
    s10.addClass('curren');
    /*s10.addClass('moveFromBottom');*/
    $('.s_10 .textBox').addClass('moveFromBottom');
    $('.s_10 .imgBox .img01').addClass('moveCircle');
    $('.s_10 .imgBox .img02').addClass('moveFromRight');
});
s9.swipeDown(function() {
    s9.removeClass('show');
    s9.addClass('hidden');
    s9.removeClass('curren');
    /*s9.removeClass('moveFromBottom');*/

    s8.removeClass('hidden');
    s8.addClass('show');
    s8.addClass('curren');
    /*s8.addClass('moveFromBottom');*/
    $('.s_8 .textBox').addClass('moveFromBottom');
    $('.s_8 .imgBox .img01').addClass('moveCircle');
    $('.s_8 .imgBox .img02').addClass('moveFromRight');
});


s10.swipeUp(function() {
    s10.removeClass('show');
    s10.addClass('hidden');
    s10.removeClass('curren');
    /*s10.removeClass('moveFromBottom');*/

    s11.removeClass('hidden');
    s11.addClass('show');
    s11.addClass('curren');
    /*s11.addClass('moveFromBottom');*/
    $('.s_11 .textBox').addClass('moveFromBottom');
    $('.s_11 .imgBox .img01').addClass('moveCircle');
    $('.s_11 .imgBox .img02').addClass('moveFromLeft');
});
s10.swipeDown(function() {
    s10.removeClass('show');
    s10.addClass('hidden');
    s10.removeClass('curren');
    /*s10.removeClass('moveFromBottom');*/

    s9.removeClass('hidden');
    s9.addClass('show');
    s9.addClass('curren');
    /*s9.addClass('moveFromBottom');*/
    $('.s_9 .textBox').addClass('moveFromBottom');
    $('.s_9 .imgBox .img01').addClass('moveCircle');
    $('.s_9 .imgBox .img02').addClass('moveFromLeft');
});

s11.swipeUp(function() {
    s11.removeClass('show');
    s11.addClass('hidden');
    s11.removeClass('curren');
    /*s11.removeClass('moveFromBottom');*/

    s1.removeClass('hidden');
    s1.addClass('show');
    s1.addClass('curren');
    /*s1.addClass('moveFromBottom');*/
    $('.s_1 .textBox').addClass('moveFromBottom');
    $('.s_1 .imgBox .img01').addClass('moveCircle');
    $('.s_1 .imgBox .img02').addClass('moveFromLeft');
});
s11.swipeDown(function() {
    s11.removeClass('show');
    s11.addClass('hidden');
    s11.removeClass('curren');
    /*s11.removeClass('moveFromBottom');*/

    s10.removeClass('hidden');
    s10.addClass('show');
    s10.addClass('curren');
    /*s10.addClass('moveFromBottom');*/
    $('.s_10 .textBox').addClass('moveFromBottom');
    $('.s_10 .imgBox .img01').addClass('moveCircle');
    $('.s_10 .imgBox .img02').addClass('moveFromLeft');
});

/*
setWidth();
function setWidth(){
   var winWidth = document.body.clientWidth;
   console.log($('.imgBox div').eq(0).style.marginLeft);
  $('.imgBox div').eq(0).style.Left = (winWidth - $('.imgBox div').eq(0).width())/2 +'px';
}
*/

//var sections = $('.product .section');
/*
 for (var i = 0; i < sections.length; i++) {
 sections.eq(0).swipeUp(function () {
 //console.log($(this));
 $(this).addClass('moveToTop');
 $(this).eq(0).next().addClass('moveFromTop');
 });
 }
 */