/* global hexo */

'use strict';

var wp_langs = ['ar', 'en', 'es', 'de', 'fr', 'it', 'ja', 'ko', 'pt', 'ru', 'zh'];

function wpLink(args) {
  args = args.join(' ').split('|');
  var langIsValid = wp_langs.includes(args[0].trim());
  var lang = langIsValid ? args[0].trim() : 'en';
  var article = langIsValid ? args[1].trim() : args[0].trim();
  var display = article;
  if (langIsValid && args.length === 3) display = args[2].trim();
  if (!langIsValid && args.length === 2) display = args[1].trim();

  return '<a target="_blank" href="https://' + lang + '.wikipedia.org/wiki/' + encodeURIComponent(article) + '">' + display + '</a>'
}

hexo.extend.tag.register('wp', wpLink, { ends: false });
