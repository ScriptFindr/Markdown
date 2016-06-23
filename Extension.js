var Extension = (function() {
  return {
    id: 'markdown-',
    comments: {
      pattern: /\[comment\]\:(\s){0,}\#(\s){0,}\(([\s\S]*?)\)/gm,
      remove: /(\[comment\]\:(\s){0,}\#(\s){0,}\(|\)$)/gm,
      wrap: '<span class="markdown-hide">$&</span>'
    },
    escapes: {
      less: {
        pattern: /\</gm,
        replace: '&lt;'
      },
      and: {
        pattern: /\&/gm,
        replace: '&amp;'
      }
    },
    deadspace: {
      pattern: /(^[\s\n]+)/gm
    }
  };
})();
