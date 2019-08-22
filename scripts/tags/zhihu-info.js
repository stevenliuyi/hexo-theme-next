/* global hexo */

'use strict';

function zhihuInfo(args) {
  return '<div class="article-info">注：本文首发于知乎问题 <a href="https://www.zhihu.com/' + args[1] + '">' + args[0] + '</a> 。</div>'
}

hexo.extend.tag.register('zhihuinfo', zhihuInfo, { ends: false });
