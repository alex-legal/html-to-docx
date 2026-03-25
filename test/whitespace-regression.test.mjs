import assert from 'node:assert/strict';

import minifyHTMLString from '../src/utils/minify-html.js';

const preservedCases = [
  ['inline span separator', '<span>75012</span> <span>Paris</span>'],
  ['mixed inline formatting separator', '<strong>A</strong> <em>B</em>'],
  ['space-only strong node', '<strong> </strong>'],
  ['nested space-only inline node', '<strong><em> </em></strong>'],
  ['space wrapped in inline element', 'foo<span> </span><strong>bar</strong>'],
];

const collapsedFormattingCases = [
  ['newline between paragraphs', '<p>One</p>\n    <p>Two</p>', '<p>One</p><p>Two</p>'],
  ['indented child node', '<div>\n\t<span>Text</span>\n</div>', '<div><span>Text</span></div>'],
];

preservedCases.forEach(([label, input]) => {
  assert.equal(minifyHTMLString(input), input, `${label} should preserve authored spaces`);
});

collapsedFormattingCases.forEach(([label, input, expected]) => {
  assert.equal(minifyHTMLString(input), expected, `${label} should remove formatting whitespace`);
});

assert.equal(minifyHTMLString(null), null, 'non-string inputs should still return null');

console.log('Whitespace regression checks passed');
