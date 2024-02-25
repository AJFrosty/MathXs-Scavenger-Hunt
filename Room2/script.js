function _0x1293(_0x3f3b76,_0x48c3f0){var _0x4f2cb6=_0x4f2c();return _0x1293=function(_0x12933d,_0x2c596f){_0x12933d=_0x12933d-0x1e8;var _0x2eaed5=_0x4f2cb6[_0x12933d];return _0x2eaed5;},_0x1293(_0x3f3b76,_0x48c3f0);}var _0x1babb1=_0x1293;(function(_0x3486b2,_0x496dc0){var _0x217316=_0x1293,_0x8e9493=_0x3486b2();while(!![]){try{var _0x1c4a4b=parseInt(_0x217316(0x1f0))/0x1+-parseInt(_0x217316(0x1ef))/0x2*(parseInt(_0x217316(0x1f3))/0x3)+parseInt(_0x217316(0x1ec))/0x4*(-parseInt(_0x217316(0x1eb))/0x5)+-parseInt(_0x217316(0x1ea))/0x6+-parseInt(_0x217316(0x1f4))/0x7*(-parseInt(_0x217316(0x1f1))/0x8)+parseInt(_0x217316(0x1ed))/0x9*(-parseInt(_0x217316(0x1e8))/0xa)+parseInt(_0x217316(0x1f2))/0xb;if(_0x1c4a4b===_0x496dc0)break;else _0x8e9493['push'](_0x8e9493['shift']());}catch(_0x4c5a3f){_0x8e9493['push'](_0x8e9493['shift']());}}}(_0x4f2c,0x3ddbf));var user;function _0x4f2c(){var _0x58a4fe=['Enter\x20The\x20Clue\x20From\x20\x27Leet\x27s\x20Get\x20It\x20Start!\x27:','736614uWIVqT','2176295lNWDLx','4hHowlI','9RnQmoO','Incorrect!','132078TUwSZL','486248rAkWPk','935304LqjIYm','5219951bhyEgG','9IpQzFX','21iPlMty','3020080mpIpBc'];_0x4f2c=function(){return _0x58a4fe;};return _0x4f2c();}while(!![]){user=prompt(_0x1babb1(0x1e9));if(user==='Easy\x20Enough\x20Right')break;else alert(_0x1babb1(0x1ee));}
function rollDices() {
    const dices = document.querySelectorAll('.dice');

    dices.forEach(die => {
        die.textContent = getRandomNumber(1, 6);
    });

    if (checkWin()) {
        alert("You rolled 1, 2, 3, 4, 5, 6! The Password for the next clue is: Hunger Games. You're going to be redirected to the next clue so save that password!");
        window.location.href = "../Room3/index.html";
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkWin() {
    const values = Array.from(document.querySelectorAll('.dice')).map(die => parseInt(die.textContent));
    return values.sort().toString() === "1,2,3,4,5,6";
}