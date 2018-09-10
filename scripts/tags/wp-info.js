/* global hexo */

'use strict';

function wpInfo(args) {
  return '<div class="article-info">注：本文首发于中文维基百科条目<a href="https://zh.wikipedia.org/wiki/' + encodeURIComponent(args[0]) + '">' + args[0] + '</a>。</div>'
}

hexo.extend.tag.register('wpinfo', wpInfo, { ends: false });
