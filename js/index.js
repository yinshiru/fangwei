/**
 * Created by yinshiru on 2017/1/4.
 */

$(function(){
    //服务范围动效
    $('.ser_title').animate({
        top: 0
    }, 1500);
    //标题介绍
    $('.title_text').animate({
        left:0
    },1000);
    //服务内容
    $('.service_box').animate({
        bottom:0,
        opacity:1,
    },1500);
    //案例内容
    $('.case_content').animate({
        bottom:0,
        opacity:1,
    },2000);
    //解决方案
    $('.solve_title').animate({
        right:0
    },1000);
//    新闻资讯
    $('.new_title').animate({
        bottom:0
    },500);

    $('.new_content').animate({
        left:0
    },1000);

    $('.new_info_li_box').hover(function() {
        $(this).css({ 'height': '162px', 'borderColor': '#15909C', 'marginBottom': '0px', 'top': '10px' });
        $(this).find('.new_info_box').css('top', '-72px');
        $(this).find('.new_span').css('color', '#15909C');
    }, function() {
        $(this).css({ 'height': '142px', 'borderColor': '#666666', 'marginBottom': '20px', 'top': '20px' });
        $(this).find('.new_info_box').css('top', '0px');
        $(this).find('.new_span').css('color', '#000000');
    })
})

