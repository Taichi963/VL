$(function () {
  $('.hamburger').click(function () {
    $(this).toggleClass('active');

    if ($(this).hasClass('active')) {
      $('.globalMenuSp').addClass('active');
    } else {
      $('.globalMenuSp').removeClass('active');
    }
  });
  /**
   * ＝＝＝＝＝　ハンバーガメニュー＝＝＝＝＝＝＝＝＝＝
   */

  /**
   * ＝＝＝＝＝ footer scroll ＝＝＝＝＝＝＝＝＝＝
   */
  $('a[href^="#top"]').click(() => {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });
});
