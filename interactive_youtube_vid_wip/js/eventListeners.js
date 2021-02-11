for (let i = 0; i < span_elt.length; i++) {
  span_elt[i].addEventListener('click', btnSelect.bind(this, i));
}