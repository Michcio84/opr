// ==UserScript==
// @name         Ciemny Temat - wayfarer
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Ciemny temat do oceny portali
// @author       MichcioAn
// @match        https://wayfarer.nianticlabs.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
'use strict';

var css='';

/* root */
// dwa wiersze ponizej zaladowanie czcionki od google razem z polskimi znakami oraz wymuszenie jej na każdym polu tekstowym
css+="@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap&subset=latin-ext');";
css+="*{font-family:'Roboto',Akkurat,sans-serif !important; }";
css+=".glyphicon{font-family:'Glyphicons Halflings' !important;}";

css+='body{background:#222;color:#ddd;}';
css+='.button-secondary{background:#777;color:#fff;box-shadow:1px 2px 4px #000;}';
css+='.button-secondary:focus,.button-secondary:hover{background:#bbb;}';
css+='h3{color:#eee;}';
css+='#gallery-info{background-color:#333;}';

/* pasek */
css+='.header{background:#555;}';
css+=".header .hamburger::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath fill='%23fff' d='M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z'/%3E%3C/svg%3E\");}";

/* animacja ladowania */
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
css+="#nom-table-title--arrow::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='none' d='M0 0h24v24H0z'/%3E%3Cpath fill='%23fff' d='M16.01 11H4v2h12.01v3L20 12l-3.99-4z'/%3E%3C/svg%3E\");}";
css+='.card{box-shadow:1px 2px 4px #000;background-color:#333;}';
css+='.nom-info-top-left h2{color:#eee;font-family:Akkurat,Roboto,sans-serif;}';
css+='.nom-info-top-left h3{color:#ccc;font-family:Akkurat,Roboto,sans-serif;}';
css+='.nomination-status--queue, status-container .nomination-status--voting{color:#ccc;background:rgba(0,0,0,.5);}';
css+='.nomination-status--next-upgrade, .nomination-status--upgrade{color:#ccc;background:rgba(120,19,254,.5);}';
css+='.nomination-status--duplicate, .nomination-status--rejected, .nomination-status--withdrawn{color:#ddd;background:rgba(255,0,0,.5);}';
css+='.nom-info-bottom .nomination-card-date{color:#bbb;}';
css+='.text-bold {font-weight:bold;}';

css+='.nomination-title{color:#eee;}';
css+='.nomination-category-header{color:#eee;}';
css+='.nomination-category-body{color:#ccc;}';

css+='#nom-edit-container{background:#222;}';

/* recenzje */
css+=".reset-map-icon::before{background-image:url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath fill='%23fff' d='M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E\");}";
css+='.card-header__title{color:#eee;}';
css+='#map{height:300px !important;}';
css+='.supporting-central-field{background:#222;}';
css+='.modal-body{background:#555;}';
css+='.supporting-statement-central-field{background:#222;}';
css+='.supporting-statement-central-field p{color:#eee;padding:5px 5px;}';
css+='.title-description-central-field{padding:5px 0px;background:#222;}';
css+='.flex-map-row span:nth-last-child(1){font-size:100%;color:#f7ff89;display:block !important;}';
css+='#WhatIsItController .categories-display .categories-display-container ul li .categories-display-name{color:#ddd;}';
css+='#WhatIsItController .categories-display .categories-display-container ul li .arrow-element::before{color:#ddd;}';
css+='#WhatIsItController .categories-display .categories-display-result{color:#ddd;}';
css+='#WhatIsItController .categories-display .categories-display-result::before{fill:#ddd;}';
css+='textarea{color:#ddd;background:#222;}';

// zmiana wielkosci i kolor czcionki w nazwie i opisie zgloszenia
css+='h1.title-description{color:#90ffb8;font-size:24px;margin-bottom:15px;}';
css+='h4.title-description{color:#eee;font-weight:normal;}';

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