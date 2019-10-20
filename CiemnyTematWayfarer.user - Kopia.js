// ==UserScript==
// @name         Ciemny Temat - Wayfarer
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Ciemny motyw
// @author       MichcioAn
// @match        https://wayfarer.nianticlabs.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
'use strict';

var css='';

// info o ciastkach
css+='ark-cookiebar{background:#111;}';
css+='.ark-cookiebar-buttons button{background:#222;}';

/* root */
// ustawienie czcionek (razem z polskimi znakami)
css+="@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=latin-ext');";
css+="*{font-family:'Roboto',Akkurat,sans-serif !important;}";
css+=".glyphicon{font-family:'Glyphicons Halflings' !important;}";
// ogólne
css+='body{background:#222;color:#ddd;}';
css+='.button-secondary{background:#555;color:#ddd;box-shadow:1px 2px 4px #000;}';
css+='.button-secondary:focus,.button-secondary:hover{background:#444;}';
css+='.button-primary{color:#ddd;box-shadow:1px 2px 4px #000;}';
// prezentacja
css+='#gallery-info{background-color:#333;}';
css+='h3{color:#eee;}';
// pasek
css+='.header{background:#555;}';
css+=".header .hamburger::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='%23fff' d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'/%3E%3C/svg%3E\");}";
// animacja ładowania
css+='.niantic-loader__animation{background:#222;}';

/* ustawienia */
css+="#SettingsController .settings-content .settings-item .item-edit::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\");}";
css+='#SettingsController .settings-content .settings-item .item-header{color:#ddd;}';
css+='#SettingsController .settings-content .settings-item .item-text{color:#aaa;}';
css+='#SettingsController .settings-content .settings-item .item-value{color:#8B4AE8;}';

/* profil */
css+='#chart-contain>h1{color:#ddd;}';
css+='#performance{color:#ddd;}';
css+='svg text{fill:#ddd;}';
css+='#profile-stats{color:#ddd}';

/* nominacje */
// ołówek
css+="#nom-table-title--arrow::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath fill='%23fff' d='M16.01 11H4v2h12.01v3L20 12l-3.99-4z'/%3E%3C/svg%3E\");}";
// karty
css+='.card{box-shadow:1px 2px 4px #000;background-color:#333;}';
css+='.nom-info-top-left h2{color:#eee;}';
css+='.nom-info-top-left h3{color:#ccc;}';
css+='.nom-info-bottom .nomination-card-date{color:#bbb;}';
css+='.text-bold {font-weight:700;}';
// status nominacji
css+='.nomination-status--queue, .nomination-status--voting{color:#ccc;background:rgba(0,0,0,.5);}';
css+='.nomination-status--next-upgrade, .nomination-status--upgrade{color:#ccc;background:rgba(120,19,254,.5);}';
css+='.nomination-status--duplicate, .nomination-status--rejected, .nomination-status--withdrawn{color:#ddd;background:rgba(255,0,0,.5);}';
// ustawienia filtrowania wyników
css+='#nom-options-button img{-webkit-filter:invert(75%);filter:invert(75%);}';
css+='#nom-options-modal{background:#333;}';
css+='.radio-btn:checked{background-color:#ccc;}';
css+='.radio-btn{border:2px solid #ccc;}';
// podgląd nominacji
css+='.nomination-title{color:#eee;}';
css+='.nomination-category-header{color:#eee;}';
css+='.nomination-category-body{color:#ccc;}';

/* recenzje */
css+='.card-header__title{color:#eee;}';
css+='.supporting-central-field{background:#222;}';
css+='.card__header p{color:#aaa}';
// nazwa i opis
css+='h1.title-description{color:#90ffb8;font-size:22px;margin-bottom:15px;}';
css+='h4.title-description{color:#eee;font-weight:normal;}';
// informacje uzupełniające
css+='.supporting-statement-central-field{background:#222;}';
css+='.supporting-statement-central-field p{color:#eee;padding:5px 5px;}';
// reset mapy
css+=".reset-map-icon::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\");}";
// dokładność lokalizacji
css+='.card-header__description{color:#aaa}'; // => .card__header p{color:#aaa}';
css+='.flex-map-row span:nth-last-child(1){font-size:1em;color:#f7ff89;display:block !important;}';
// co to jest ?
css+='.card__body input.text-input{background:#222;color:#ccc;}';
css+='.card__body input.text-input::placeholder{color:#aaa;}';
css+='.categories-display-container{box-shadow:1px 2px 4px #111;}';
css+='.category__display-name{color:#ccc;}';
css+='.categories-display-result span{color:#ddd;}';
css+='.categories-display-result--leaf-node span:last-child{color:#f76b43;}';
css+='.categories-display-result span:not(:first-child)::before{color:#999;}';
css+='.categories-display-result::before{-webkit-filter:invert(100%);filter:invert(100%);}';
// dodatkowe komentarze
css+='.card__body textarea{background:#222;color:#ccc;}';
css+='.card__body textarea::placeholder{color:#aaa;}';
// pop z info
css+='.modal-body{background:#333;}';
css+='.modal-body .title-description-central-field{background:#333;}';
css+='.modal-body .cancel-btn::before{background-color:#333}';
// 1*
css+='.modal-content{background-color:#333;}';
css+='#low-quality-modal{color:#ccc;}';
css+='#low-quality-modal .modal-body div .select-menu #reject-reason li a::before, #low-quality-modal .modal-body div .select-menu #reject-reason li label::before{-webkit-filter:invert(0%);filter:invert(0%);}';
css+='#low-quality-modal .modal-body div .select-menu #reject-reason li a, #low-quality-modal .modal-body div .select-menu #reject-reason li label{box-shadow:inset 0 -1px rgba(0,0,0,0.5);background:rgba(0,0,0,0.1);}';
css+='#low-quality-modal .modal-body textarea{background:#222;color:#ccc;}';





css+='.title-description-central-field{padding:5px 0px;background:#222;}';

css+='#WhatIsItController .categories-display .categories-display-container ul li .categories-display-name{color:#ddd;}';
css+='#WhatIsItController .categories-display .categories-display-container ul li .arrow-element::before{color:#ddd;}';
css+='#WhatIsItController .categories-display .categories-display-result{color:#ddd;}';
css+='#WhatIsItController .categories-display .categories-display-result::before{fill:#ddd;}';
css+='textarea{color:#ddd;background:#222;}';
css+=".known-information-card .known-information-map-icon::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23ccc' d='M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\");}";

css+='.categories-display-result span {color:#ccc;}';


// 1*
css+='.modal-content{background:#333;}';
css+='#low-quality-modal{color:#eee;}';

css+='.known-information-need-edit{background:#333;}';
css+='.text-input.text-input{color:#ccc;}';
css+='.duplicate-map-popup-title{color:#222;}';



var head=document.head||document.getElementsByTagName('head')[0],
style=document.createElement('style');
head.appendChild(style);
style.type='text/css';
if(style.styleSheet){style.styleSheet.cssText=css;}
else{style.appendChild(document.createTextNode(css));}
})();