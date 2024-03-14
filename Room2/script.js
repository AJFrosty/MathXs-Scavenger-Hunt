function _0x1293(_0x3f3b76,_0x48c3f0){var _0x4f2cb6=_0x4f2c();return _0x1293=function(_0x12933d,_0x2c596f){_0x12933d=_0x12933d-0x1e8;var _0x2eaed5=_0x4f2cb6[_0x12933d];return _0x2eaed5;},_0x1293(_0x3f3b76,_0x48c3f0);}var _0x1babb1=_0x1293;(function(_0x3486b2,_0x496dc0){var _0x217316=_0x1293,_0x8e9493=_0x3486b2();while(!![]){try{var _0x1c4a4b=parseInt(_0x217316(0x1f0))/0x1+-parseInt(_0x217316(0x1ef))/0x2*(parseInt(_0x217316(0x1f3))/0x3)+parseInt(_0x217316(0x1ec))/0x4*(-parseInt(_0x217316(0x1eb))/0x5)+-parseInt(_0x217316(0x1ea))/0x6+-parseInt(_0x217316(0x1f4))/0x7*(-parseInt(_0x217316(0x1f1))/0x8)+parseInt(_0x217316(0x1ed))/0x9*(-parseInt(_0x217316(0x1e8))/0xa)+parseInt(_0x217316(0x1f2))/0xb;if(_0x1c4a4b===_0x496dc0)break;else _0x8e9493['push'](_0x8e9493['shift']());}catch(_0x4c5a3f){_0x8e9493['push'](_0x8e9493['shift']());}}}(_0x4f2c,0x3ddbf));var user;function _0x4f2c(){var _0x58a4fe=['Enter\x20The\x20Clue\x20From\x20\x27Leet\x27s\x20Get\x20It\x20Start!\x27:','736614uWIVqT','2176295lNWDLx','4hHowlI','9RnQmoO','Incorrect!','132078TUwSZL','486248rAkWPk','935304LqjIYm','5219951bhyEgG','9IpQzFX','21iPlMty','3020080mpIpBc'];_0x4f2c=function(){return _0x58a4fe;};return _0x4f2c();}while(!![]){user=prompt(_0x1babb1(0x1e9));if(user==='Easy\x20Enough\x20Right')break;else alert(_0x1babb1(0x1ee));}
function rollDices() {
    const dices = document.querySelectorAll('.dice');

    dices.forEach(die => {
        die.textContent = getRandomNumber(1, 6);
    });

    function _0x4191(_0x41ba46,_0x1da647){var _0x3c04cd=_0x3c04();return _0x4191=function(_0x41914e,_0x568f7d){_0x41914e=_0x41914e-0x18f;var _0xa3292d=_0x3c04cd[_0x41914e];return _0xa3292d;},_0x4191(_0x41ba46,_0x1da647);}var _0x1b8273=_0x4191;function _0x3c04(){var _0x43a7e4=['6933582LYrtEn','210RzvcPg','1017vKppfk','120BxDbAn','13VaBOaO','68453srsRed','146144XOjkwX','23135ooaXxu','2WMqBoZ','736697zoiUsA','161bplnBQ','9196vQRkds','You\x20rolled\x201,\x202,\x203,\x204,\x205,\x206!\x20The\x20Password\x20for\x20the\x20next\x20clue\x20is:\x20Hunger\x20Games.\x20You\x27re\x20going\x20to\x20be\x20redirected\x20to\x20the\x20next\x20clue\x20so\x20save\x20that\x20password!','../Room3/index.html','27585744rIKQjw','href'];_0x3c04=function(){return _0x43a7e4;};return _0x3c04();}(function(_0x5aee6e,_0x26549c){var _0x1332a0=_0x4191,_0x2b908b=_0x5aee6e();while(!![]){try{var _0x1735ae=parseInt(_0x1332a0(0x191))/0x1*(-parseInt(_0x1332a0(0x190))/0x2)+parseInt(_0x1332a0(0x19a))/0x3*(-parseInt(_0x1332a0(0x193))/0x4)+-parseInt(_0x1332a0(0x18f))/0x5*(-parseInt(_0x1332a0(0x199))/0x6)+parseInt(_0x1332a0(0x192))/0x7*(parseInt(_0x1332a0(0x19e))/0x8)+-parseInt(_0x1332a0(0x198))/0x9+-parseInt(_0x1332a0(0x19b))/0xa*(parseInt(_0x1332a0(0x19d))/0xb)+parseInt(_0x1332a0(0x196))/0xc*(parseInt(_0x1332a0(0x19c))/0xd);if(_0x1735ae===_0x26549c)break;else _0x2b908b['push'](_0x2b908b['shift']());}catch(_0x5f2412){_0x2b908b['push'](_0x2b908b['shift']());}}}(_0x3c04,0x7ee6d));checkWin()&&(alert(_0x1b8273(0x194)),window['location'][_0x1b8273(0x197)]=_0x1b8273(0x195));
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkWin() {
    const values = Array.from(document.querySelectorAll('.dice')).map(die => parseInt(die.textContent));
    return values.sort().toString() === "1,2,3,4,5,6";
}