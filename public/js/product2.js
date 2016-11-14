$('.carousel').carousel();
/*********************************************************/

$(window).on('scroll', function () {
    var scrollT = $(document).scrollTop();    //被卷曲页面的高度
    var osTop = $(document).scrollTop();      //距离顶部的距离
    var offhei = $(window).height();          //窗口的高度

    if (scrollT > offhei) {
        $('.score_top').show();
    } else {
        $('.score_top').hide();
    }

    if (scrollT > $('.wechatLocation').offset().top - 500) {
        animatelib($('.wechatLocation .left h1'), $('.wechatLocation .left h2'), $('.wechatLocation .left img'), "left");
    }
    if (scrollT > $('.wechatapprovals').offset().top - 300) {
        animatelib($('.wechatapprovals .right h1'), $('.wechatapprovals .right h2'), $('.wechatapprovals .right img'), "right");
    }
    if (scrollT > $('.wechatCustomer').offset().top - 300) {
        animatelib($('.wechatCustomer .left h1'), $('.wechatCustomer .left h2'), $('.wechatCustomer .left img'), "left");
    }
    if (scrollT > $('.wechatRemind').offset().top - 300) {
        animatelib($('.wechatRemind .right h1'), $('.wechatRemind .right h2'), $('.wechatRemind .right img'), "right");
    }
    if (scrollT > $('.wechatLog').offset().top - 300) {
        animatelib($('.wechatLog .left h1'), $('.wechatLog .left h2'), $('.wechatLog .left img'), "left");
    }
    if (scrollT > $('.wechaSave').offset().top - 300) {
        animatelib($('.wechaSave .right h1'), $('.wechaSave .right h3'), $('.wechaSave .right img'), "right");
    }

});


function animatelib(obj1, obj2, obj3, direction) {
    if (direction == 'left') {
        console.log(direction);
        setTimeout(function () {
            $(obj1).animate({
                left: 5,
                opacity: 1
            }, 300);
        }, 200);
        setTimeout(function () {
            $(obj2).animate({
                left: 0,
                opacity: 1
            }, 400);
        }, 400);
        setTimeout(function () {
            $(obj3).animate({
                left: 0,
                opacity: 1
            }, 600);
        }, 600);
    } else {
        console.log(direction);
        setTimeout(function () {
            $(obj1).animate({
                right: 5,
                opacity: 1
            }, 300);
        }, 200);
        setTimeout(function () {
            $(obj2).animate({
                right: 0,
                opacity: 1
            }, 400);
        }, 400);
        setTimeout(function () {
            $(obj3).animate({
                right: 0,
                opacity: 1
            }, 600);
        }, 600);
    }
}

//返回顶部
$('.score_top').on('click', function () {
    $("html,body").animate({
        scrollTop: $(".wrap").offset().top
    }, 600);
    $('.score_top').hide();
});
