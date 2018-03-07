'use strict';

setTimeout(function () {

  var height = window.getComputedStyle(document.querySelector('#termometre'), ':after').height;

  var styleElem = document.head.appendChild(document.createElement("style"));

  var newHeight = parseInt(height);
  var diff = newHeight * 0.05;

  function setHeight(height) {
    styleElem.innerHTML = '#termometre:after {height: ' + height + 'px;bottom:0;}';
  }

  function decHeight() {
    if (newHeight == 0) {
      return newHeight;
    } else {
      newHeight = newHeight - diff;
    }
    setHeight(newHeight);
  }

  function incHeight() {
    if (newHeight == 200) {
      return newHeight;
    } else {
      newHeight = newHeight + diff;
    }
    setHeight(newHeight);
  }

  var dec = document.getElementById('dec');
  dec.addEventListener('click', function (ev) {
    ev.preventDefault();
    decHeight();
  });

  var inc = document.getElementById('inc');
  inc.addEventListener('click', function (ev) {
    ev.preventDefault();
    incHeight();
  });
}, 1100);