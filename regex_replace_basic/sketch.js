const original_string = 'Han Solo&#039;s co-pilot and best friend, &quot;Chewbacca&quot;, is an Ewok. ',
  regex_apostrophe = /&#039;/g,
  regex_doubleQuote = /&quot;/gi,

  //replace punctuation numeric codes
  new_string = original_string.replace(regex_apostrophe, "'").replace(regex_doubleQuote, '"');

console.log(new_string);