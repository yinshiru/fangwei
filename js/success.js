/**
 * Created by yinshigiru on 2017/1/8.
 */
$(function () {
    $('.success_case_nav li').click(function() {
        var index = $(this).index();
        $(this).addClass('active');
        $(this).find('a').addClass('active');
        $(this).siblings('.success_case_nav li').removeClass('active');
        $(this).siblings('.success_case_nav li').find('a').removeClass('active');
        $('.case_content:eq('+index+')').css('display','block');
        $('.case_content:eq('+index+')').siblings('.case_content').css('display','none');
    })
//侧边栏
    $('.aside_phone').hover(function () {
        $(this).stop().animate({
            right:178
        },500);
    },function(){
        $(this).stop().animate({
            right:0
        },500);
    })

    $('.aside_qq').hover(function () {
        $(this).stop().animate({
            right:178
        },500);
    },function(){
        $(this).stop().animate({
            right:0
        },500);
    })

    $('.bottom').click(function () {
        $('.aside').css('display','none');
    })

})