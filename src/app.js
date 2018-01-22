const katex = require('katex')
const hljs = require('highlight.js/lib/highlight')
hljs.registerLanguage('julia', require('highlight.js/lib/languages/julia'));
hljs.registerLanguage('julia-repl', require('highlight.js/lib/languages/julia-repl'));

for (let element of document.getElementsByClassName('math')) {
  katex.render(element.textContent, element, {
    displayMode: element.classList.contains('math-block')
  });
}

for (let element of document.getElementsByClassName('hljs')) {
  hljs.highlightBlock(element);
}