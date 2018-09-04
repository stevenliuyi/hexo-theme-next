$(document).ready(function() {

  $('.links-of-author-item-weixin > a').on('click', function(e) {
    e.preventDefault();
    $('.wechat-qrcode').css('top', $('.site-author-name').offset().top - $(window).scrollTop() + 30);
    $('.wechat-qrcode').show('fast');
    return false;
  })

  $(document).mouseup(function(e) {
    var container = $('.wechat-qrcode');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide('fast');
    }
  })
});
