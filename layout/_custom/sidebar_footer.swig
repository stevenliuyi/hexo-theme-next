{% if theme.sidebar_footer.powered || theme.sidebar_footer.theme %}
  <div class="sidebar-footer motion-element">{#
  #}{% if theme.sidebar_footer.powered %}{{ __('footer.powered', '<a target="_blank"' + nofollow + ' href="https://hexo.io">Hexo</a>') }}{% endif %}{#
  #}{% if theme.sidebar_footer.powered && theme.sidebar_footer.theme %}<span class="post-meta-divider">|</span>{% endif %}{#
  #}{% if theme.sidebar_footer.theme %}{{ __('footer.theme') }} <a href="https://github.com/stevenliuyi/hexo-theme-next-blue" target="_blank">NextBlue</a>{% endif %}{#
#}</div>
{% endif %}
