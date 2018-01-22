const katex = require('katex');

var elements = document.getElementsByClassName('math');

for (var idx = 0; idx < elements.length; idx++) {
  var element = elements[idx];
  katex.render(element.textContent, element, {
    displayMode: element.classList.contains('math-block')
  });
}

