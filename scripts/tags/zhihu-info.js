/* global hexo */

'use strict';

function zhihuInfo(args) {
  return '<div class="article-info">注：本文首发于知乎，为问题 <a href="https://www.zhihu.com/' + args[1] + '">' + args[0] + '</a> 的回答。</div>'
}

hexo.extend.tag.register('zhihuinfo', zhihuInfo, { ends: false });
