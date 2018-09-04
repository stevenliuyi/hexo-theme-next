$(document).ready(function() {

  $('.links-of-author-item-weixin > a').on('click', function(e) {
    e.preventDefault();
    $('.wechat-qrcode').css('top', $('.site-author-name').offset().top - $(window).scrollTop() + 30);
    $('.wechat-qrcode').show('fast');
    $('.links-of-author-item-weixin').addClass('hidden'); // hide tooltip
    return false;
  })

  $(document).bind('mouseup touchend', function(e) {
    var container = $('.wechat-qrcode');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      container.hide('fast');
    $('.links-of-author-item-weixin').removeClass('hidden');
    }
  })
});
