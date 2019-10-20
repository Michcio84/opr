// ==UserScript==
// @id           ciemnymotyw@michicoan
// @name         Ciemny Temat - Wayfarer
// @namespace    http://tampermonkey.net/
// @updateURL    https://github.com/Michcio84/opr/raw/master/CiemnyTematWayfarer.user.js
// @downloadURL  https://github.com/Michcio84/opr/raw/master/CiemnyTematWayfarer.user.js
// @version      0.3
// @description  Ciemny motyw
// @author       MichcioAn
// @match        https://wayfarer.nianticlabs.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==


(function() {
'use strict';

var css=
  // brak dostępu do Wayfarer
  'div.niantic-logo-background-parent>a.global-back-button{color:#eee};' +
  'div.niantic-logo-background-parent>a>img{-webkit-filter:invert(100%);filter:invert(100%);}' +
   // info o ciastkach
  'ark-cookiebar{background:#111;}' +
  'ark-cookiebar .ark-cookiebar-buttons button{background:#222;}';

/* root */
css+=
  // ustawienie czcionek (razem z polskimi znakami)
  "@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=latin-ext');" +
  "*{font-family:'Roboto',Akkurat,sans-serif !important;}" +
  ".glyphicon{font-family:'Glyphicons Halflings' !important;}" +
  // ogólne
  'body{background:#222;color:#ddd;}' +
  '.button-secondary{background:#555;color:#ddd;box-shadow:1px 2px 4px #000;}' +
  '.button-secondary:focus,.button-secondary:hover{background:#444;}' +
  '.button-primary{color:#ddd;box-shadow:1px 2px 4px #000;}' +
  '.niantic-loader__animation{background:#222;}' +
  // prezentacja
  '#gallery-info{background-color:#333;}' +
  'h3{color:#eee;}' +
  // pasek
  '.header{background:#555;}' +
  '.header .hamburger::before{-webkit-filter:invert(100%);filter:invert(100%);}';

/* ustawienia */
css+=
  '#SettingsController .settings-content .settings-item .item-edit::before' + 
  '  {-webkit-filter:invert(100%);filter:invert(100%);}' +
  '#SettingsController .settings-content .settings-item .item-header{color:#ddd;}' +
  '#SettingsController .settings-content .settings-item .item-text{color:#aaa;}' +
  '#SettingsController .settings-content .settings-item .item-value{color:#8B4AE8;}';

/* profil */
css+=
  '#chart-contain>h1{color:#ddd;}' +
  '#performance{color:#ddd;}' +
  'svg text{fill:#ddd;}' +
  '#profile-stats{color:#ddd}';


/* nominacje */
css+=
  '#nom-table-title--arrow::before{-webkit-filter:invert(100%);filter:invert(100%);}' +
  // karty
  '.card{box-shadow:1px 2px 4px #000;background-color:#333;}' +
  '.nom-info-top-left h2{color:#eee;}' +
  '.nom-info-top-left h3{color:#ccc;}' +
  '.nom-info-bottom .nomination-card-date{color:#bbb;}' +
  '.text-bold {font-weight:700;}' +
  // status nominacji
  '.nomination-status--queue,.nomination-status--voting ' +
  '  {color:#ccc;background:rgba(0,0,0,.5);}' +
  '.nomination-status--next-upgrade,.nomination-status--upgrade ' +
  '  {color:#ccc;background:rgba(120,19,254,.5);}' +
  '.nomination-status--duplicate,.nomination-status--rejected, ' +
  '.nomination-status--withdrawn{color:#ddd;background:rgba(255,0,0,.5);}' +
  // ustawienia filtrowania wyników
  '#nom-search-title{background-color:#222;color:#aaa;font-size:14px;}' +
  '#nom-options-button img{-webkit-filter:invert(75%);filter:invert(75%);}' +
  '#nom-options-modal{background:#333;}' +
  '.radio-btn:checked{background-color:#ccc;}' +
  '.radio-btn{border:2px solid #ccc;}' +
  // podgląd nominacji
  '.nomination-title{color:#eee;}' +
  '.nomination-category-header{color:#eee;}' +
  '.nomination-category-body{color:#ccc;}' +
  // edycja
  '#nom-edit-container{background:#333;}' +
  '#nom-edit-container .nomination{border-bottom:1px solid #000;}' +
  '#nom-edit-container .nom-edit-input{background:#222;}' +
  '.nom-edit-input input{color:#ccc;}';

/* recenzje */
css+=
  '.card-header__title{color:#eee;}' +
  '.supporting-central-field{background:#222;}' +
  '.card__header p{color:#aaa}' +
  // nazwa i opis
  'h1.title-description{color:#90ffb8;font-size:22px;margin-bottom:15px;}' +
  'h4.title-description{color:#eee;font-weight:normal;}' +
  // informacje uzupełniające
  '.supporting-statement-central-field{background:#222;}' +
  '.supporting-statement-central-field p{color:#eee;padding:5px 5px;}' +
  // reset mapy
  '.reset-map-icon::before{-webkit-filter:invert(100%);filter:invert(100%);}' +
  '#map .gm-style button img{background-color: transparent;}' +
  // dokładność lokalizacji
  '.card-header__description{color:#aaa}' +
  '.flex-map-row span:nth-last-child(1){font-size:1em;color:#f7ff89;display:block !important;}' +
  // co to jest ?
  '.card__body input.text-input{background:#222;color:#ccc;}' +
  '.card__body input.text-input::placeholder{color:#aaa;}' +
  '.categories-display-container{box-shadow:1px 2px 4px #111;}' +
  '.category__display-name{color:#ccc;}' +
  '.categories-display-result span{color:#ddd;}' +
  '.categories-display-result--leaf-node span:last-child{color:#f76b43;}' +
  '.categories-display-result span:not(:first-child)::before{color:#999;}' +
  '.categories-display-result::before{-webkit-filter:invert(100%);filter:invert(100%);}' +
  '.category__arrow-element::before{-webkit-filter:invert(25%);filter:invert(25%);}' +
  // dodatkowe komentarze
  '.card__body textarea{background:#222;color:#ccc;}' +
  '.card__body textarea::placeholder{color:#aaa;}' +
  // pop z info
  '.modal-body{background:#333;}' +
  '.modal-body .title-description-central-field{background:#333;}' +
  '.modal-body .cancel-btn::before{background-color:#333}' +
  // 1*
  '.modal-content{background-color:#333;}' +
  '#low-quality-modal{color:#ccc;}' +
  '#low-quality-modal .modal-body div .select-menu #reject-reason li a::before, ' +
  '#low-quality-modal .modal-body div .select-menu #reject-reason li label::before ' +
  '  {-webkit-filter:invert(0%);filter:invert(0%);}' +
  '#low-quality-modal .modal-body div .select-menu #reject-reason li a, ' +
  '#low-quality-modal .modal-body div .select-menu #reject-reason li label ' +
  '  {box-shadow:inset 0 -1px rgba(0,0,0,0.5);background:rgba(0,0,0,0.1);}' +
  '#low-quality-modal .modal-body textarea{background:#222;color:#ccc;}' +
  // duplikat
  '.duplicate-map-popup-title{color:#222;}' +
  // edycja lokalizacji, nazwy, opisu
  '.known-information-need-edit{background:#333;}' +
  '.known-information-card{background-color:rgba(0,0,0,0.25);}' +
  '.known-information-card .known-information-map-icon::before '+
  '  {-webkit-filter:invert(100%);filter:invert(100%);}' +
  '.known-information-description .known-information-need-edit{background:#333;}';
  
/* pomoc */
css+=
  "#help-section-content div[id^='help'] h3 b{color:#eee;}";

var head=document.head||document.getElementsByTagName('head')[0],
    style=document.createElement('style');
style.type='text/css';
style.appendChild(document.createTextNode(css));
head.appendChild(style);

})();