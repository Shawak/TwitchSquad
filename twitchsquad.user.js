// ==UserScript==
// @name         TwitchSquad
// @namespace    https://github.com/Shawak/TwitchSquad
// @author       Shawak
// @version      0.0.1
// @description  Show twitch squad streams side by side.
// @match        *://*.twitch.tv/*
// @downloadURL  https://github.com/Shawak/TwitchSquad/raw/master/twitchsquad.user.js
// @updateURL    https://github.com/Shawak/TwitchSquad/raw/master/twitchsquad.user.js
// @grant        GM_addStyle
// ==/UserScript==

if (typeof GM_addStyle === 'undefined') {
  GM_addStyle = function(css) {
    let head = document.getElementsByTagName('head')[0], style = document.createElement('style');
    if (!head) {return}
    style.type = 'text/css';
    try {style.innerHTML = css}
    catch(x) {style.innerText = css}
    head.appendChild(style);
  };
}

GM_addStyle(`
.multi-stream-player-layout__player-container {
    display: flex;
}

.multi-stream-player-layout__player, .multi-stream-player-layout__player-primary {
    transform: none !important;
    height: 100% !important;
    width: 50% !important;
    position: unset;
}
`);
