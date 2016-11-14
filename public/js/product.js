$('.carousel').carousel();

/*********************************************************/
var locationLeft = $('.wechatLocation .left');
var locationRight = $('.wechatLocation .right');

var approvalsRight = $('.wechatapprovals .right');
var approvalsLeft = $('.wechatapprovals .left');

var CustomerLeft = $('.wechatCustomer .left');
var CustomerRight = $('.wechatCustomer .right');

var RemindRight = $('.wechatRemind .right');
var RemindLeft = $('.wechatRemind .left');

var LogLeft = $('.wechatLog .left');
var LogRight = $('.wechatLog .right');

var SaveLeft = $('.wechaSave .left');
var SaveRight = $('.wechaSave .right');


/*  var righta = $('.right');
 var lefta = $('.left');*/
/*    animaLeftto(lefta);
 animaRightto(righta);*/

// console.log(Oobj.offset().top);

function animaLeftto(obj) {
    $(obj).animate({
        left: 0,
        opacity: 1
    }, 600);
}
function animaRightto(obj) {
    $(obj).animate({
        right: 0,
        opacity: 1
    }, 600);
}

function animatelib(obj1,obj2,obj3,direction){
    $(obj1)
    $(obj2)
    $(obj3).animate({
        direction: 0,
        opacity: 1
    }, 600);
}


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

    if (scrollT > $('.wechatLocation').offset().top-500) {
        animaLeftto(locationLeft);
        animaRightto(locationRight);
    }

    if (scrollT > $('.wechatapprovals').offset().top - 300) {
      console.log($('.wechatapprovals').offset().top - 300);
        animaLeftto(approvalsLeft);
        animaRightto(approvalsRight);

    }
    if (scrollT > $('.wechatCustomer').offset().top - 300) {

        animaLeftto(CustomerLeft);
        animaRightto(CustomerRight);

    }
    if (scrollT > $('.wechatRemind').offset().top - 300) {
        animaLeftto(RemindLeft);
        animaRightto(RemindRight);


    }
    if (scrollT > $('.wechatLog').offset().top - 300) {
        animaLeftto(LogLeft);
        animaRightto(LogRight);

    }
    if (scrollT > $('.wechaSave').offset().top - 300) {
        animaLeftto(SaveLeft);
        animaRightto(SaveRight);
    }

});
//返回顶部
$('.score_top').on('click', function () {
    $("html,body").animate({
        scrollTop: $(".wrap").offset().top
    }, 600);
    $('.score_top').hide();
});
