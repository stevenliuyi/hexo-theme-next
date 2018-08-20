{% if theme.sidebar_footer.powered || theme.sidebar_footer.theme %}
  <div class="sidebar-footer">
    {% if theme.sidebar_footer.powered %}由 <a href="https://hexo.io">Hexo</a> 驱动{% endif %}
    {% if theme.sidebar_footer.powered && theme.sidebar_footer.theme %}&nbsp;&nbsp;|&nbsp;&nbsp;{% endif %}
    {% if theme.sidebar_footer.theme %}主题 <a href="https://github.com/stevenliuyi/hexo-theme-next-blue">NextBlue</a>{% endif %}
  </div>
{% endif %}
