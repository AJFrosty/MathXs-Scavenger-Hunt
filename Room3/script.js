var _0x196e4f=_0x30b5;(function(_0x317c7a,_0x5256cf){var _0x5ac90e=_0x30b5,_0xed100f=_0x317c7a();while(!![]){try{var _0x4170bd=parseInt(_0x5ac90e(0x1b1))/0x1*(parseInt(_0x5ac90e(0x1ab))/0x2)+-parseInt(_0x5ac90e(0x1af))/0x3*(-parseInt(_0x5ac90e(0x1a6))/0x4)+-parseInt(_0x5ac90e(0x1ad))/0x5+-parseInt(_0x5ac90e(0x1ae))/0x6*(-parseInt(_0x5ac90e(0x1a7))/0x7)+parseInt(_0x5ac90e(0x1ac))/0x8+parseInt(_0x5ac90e(0x1a9))/0x9*(parseInt(_0x5ac90e(0x1b0))/0xa)+-parseInt(_0x5ac90e(0x1a8))/0xb*(parseInt(_0x5ac90e(0x1a5))/0xc);if(_0x4170bd===_0x5256cf)break;else _0xed100f['push'](_0xed100f['shift']());}catch(_0x40b6e6){_0xed100f['push'](_0xed100f['shift']());}}}(_0x4259,0x68a25));var user;function _0x30b5(_0x154b73,_0x3b69f7){var _0x425960=_0x4259();return _0x30b5=function(_0x30b52b,_0x4eb9e0){_0x30b52b=_0x30b52b-0x1a5;var _0x69fb91=_0x425960[_0x30b52b];return _0x69fb91;},_0x30b5(_0x154b73,_0x3b69f7);}while(!![]){user=prompt(_0x196e4f(0x1aa));if(user===_0x196e4f(0x1b2))break;else alert('Incorrect!');}function _0x4259(){var _0x135d35=['18OKfHwB','2871fKZXra','977140fTgJNN','78972obUMFD','X\x20Marks\x20The\x20Spot','1848924lJVrQT','2248UpgtFo','243845TJvOlN','33fsYUgO','9gRIfKR','Enter\x20The\x20Clue:','6LFvTeI','1608768lJlnaB','1436265gNvqVL'];_0x4259=function(){return _0x135d35;};return _0x4259();}

function rollDices() {
    const dices = document.querySelectorAll('.dice');

    dices.forEach(die => {
        die.textContent = getRandomNumber(1, 6);
    });

    if (checkWin()) {
        alert("You rolled 1, 2, 3, 4, 5, 6! The Password for the next clue is: Hunger Games. You're going to be redirected to the next clue so save that password!");
        window.location.href = "../Room4/index.html";
    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkWin() {
    const values = Array.from(document.querySelectorAll('.dice')).map(die => parseInt(die.textContent));
    return values.sort().toString() === "1,2,3,4,5,6";
}