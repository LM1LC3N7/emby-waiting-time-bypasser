// ==UserScript==
// @name         Emby waiting time bypasser
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Getting rid of the popup "Discover Emby Premiere"
// @author       Louis MILCENT
// @match        http*://media.lmilcent.com/*
// @downloadURL  https://raw.githubusercontent.com/flexbrane/emby-waiting-time-bypasser/release/waitingTimeByPasser.js
// @supportURL   https://github.com/flexbrane/emby-waiting-time-bypasser/issues
// @grant        none
// ==/UserScript==

(function () {
  'use strict';
  let waitBtn = '.formDialogContent .dialogContentInner .formDialogFooter .continueTimeText';
  let continueBtn = '.formDialogContent .dialogContentInner .formDialogFooter .btnContinue';

  // Time in ms
  let checkEvery = 250;

  setInterval(function () {
    if (document.querySelectorAll(waitBtn).length) {
      console.log('Deleting the waiting button!');
      removeWaiting();
    }
  }, checkEvery);

  //
  // Function called when the button is detected
  //  - Hide the waiting time
  //  - Show the continue button
  //  - Click on it
  //
  function removeWaiting () {
    console.log('==================================');
    console.log('');
    console.log('');
    console.log('   EMBY WAITING TIME BYPASSED!!   ');
    console.log('');
    console.log('');
    console.log('==================================');
    document.querySelectorAll(waitBtn)[0].classList.add('hide');
    document.querySelectorAll(continueBtn)[0].classList.remove('hide');
    document.querySelectorAll(continueBtn)[0].click();
  }
})();
