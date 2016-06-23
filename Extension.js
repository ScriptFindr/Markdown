var Extension = (function() {
  return {
    id: 'markdown-',
    comments: {
      wrap: {
        begin: '<span class="markdown-hide">',
        end: '</span>'
      },
      pattern: /\[comment\]\:(\s){0,}\#(\s){0,}\(([\s\S]*?)\)/gm,
      remove: /(\[comment\]\:(\s){0,}\#(\s){0,}\(|\)$)/gm
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
      pattern: /(^|$)(([\s\n]{2,})+)/gm,
      replace: '<br><br>'
    },
    blockquotes: {
      pattern: /^\>([\s\S]*?)(?=^\n)/gm,
      remove: /^\>([\s\t]{1,})?/gm
    },
    codes: {
      extra: {
        pattern: /\`{2}([\s\S]*?)\`{2}/gm,
        
      }
    },
    headers: {
      h6: {
        pattern: /^(\#{6}(\s)?.+)/gm,
        remove: /\#{6}(\s)?/gm
      },
      h5: {
        pattern: /^(\#{5}(\s)?.+)/gm,
        remove: /\#{5}(\s)?/gm
      },
      h4: {
        pattern: /^(\#{4}(\s)?.+)/gm,
        remove: /\#{4}(\s)?/gm
      },
      h3: {
        pattern: /^(\#{3}(\s)?.+)/gm,
        remove: /\#{3}(\s)?/gm
      },
      h2: {
        pattern: /^(\#{2}(\s)?.+)/gm,
        remove: /\#{2}(\s)?/gm
      },
      h1: {
        pattern: /^(\#{1}(\s)?.+)/gm,
        remove: /\#{1}(\s)?/gm
      }
    },
    lists: {
      
    },
    rules: {
      
    },
    links: {
      
    },
    styles: {
      
    },
    images: {
      
    }
  };
})();
