/*jslint indent: 2, unparam: true*/
/*global $: false, document: false, togglbutton: false*/
'use strict';

togglbutton.render('body.controller-issues.action-show .contextual:not(.toggl)', {}, function (elem) {
  var link, description,
    numElem = $('h2'),
    titleElem = $('.subject h3') || "",
    projectElem = $('h1');

  if (!!$('.toggl-button')) {
    return;
  }

  if (!!titleElem) {
    description = titleElem.textContent;
  }

  if (numElem !== null) {
    if (!!description) {
      description = " " + description;
    }
    var numText = numElem.textContent;

    if (numText.indexOf('#') > 0) {
      numText = numText.substr(numText.indexOf('#'));
    }
    description = numText + description;
  }

  link = togglbutton.createTimerLink({
    className: 'islergucler',
    description: description,
    projectName: projectElem && projectElem.textContent
  });


  var contextual = document.querySelector('#content>.contextual');
  contextual.insertBefore(link, contextual.firstChild);
});
