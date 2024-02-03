function _0x5161(_0x310ec5,_0x1950cd){var _0x28c21e=_0x28c2();return _0x5161=function(_0x516115,_0x67ac4d){_0x516115=_0x516115-0x11f;var _0x36edad=_0x28c21e[_0x516115];return _0x36edad;},_0x5161(_0x310ec5,_0x1950cd);}var _0x3f8608=_0x5161;function _0x28c2(){var _0x47ed92=['X\x20Marks\x20The\x20Spot','887136hvjKQO','466524BnSTRC','Enter\x20The\x20Clue\x20From\x20\x22Burried\x20Treasure\x22:','1163718DzzKRH','1ygpRCW','160UUoTlp','Incorrect!','132rcvQoF','282585frovfL','3580920NOCjIo','1231512jQApox','3101175HBCoSp'];_0x28c2=function(){return _0x47ed92;};return _0x28c2();}(function(_0x127f45,_0x4c5fd3){var _0x5ff029=_0x5161,_0x5c6dbf=_0x127f45();while(!![]){try{var _0x4e0a6c=parseInt(_0x5ff029(0x124))/0x1*(-parseInt(_0x5ff029(0x120))/0x2)+parseInt(_0x5ff029(0x123))/0x3+-parseInt(_0x5ff029(0x127))/0x4*(-parseInt(_0x5ff029(0x128))/0x5)+parseInt(_0x5ff029(0x129))/0x6+-parseInt(_0x5ff029(0x12b))/0x7+-parseInt(_0x5ff029(0x12a))/0x8+-parseInt(_0x5ff029(0x121))/0x9*(parseInt(_0x5ff029(0x125))/0xa);if(_0x4e0a6c===_0x4c5fd3)break;else _0x5c6dbf['push'](_0x5c6dbf['shift']());}catch(_0x18ee19){_0x5c6dbf['push'](_0x5c6dbf['shift']());}}}(_0x28c2,0xef3a7));var user;while(!![]){user=prompt(_0x3f8608(0x122));if(user===_0x3f8608(0x11f))break;else alert(_0x3f8608(0x126));}
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