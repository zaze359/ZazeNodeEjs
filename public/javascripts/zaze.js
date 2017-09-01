/**
 * Created by zaze on 2017/9/1.
 */
$(function () {
    $('.navbar-nav li').click(function (e) {
        // e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
    });
});