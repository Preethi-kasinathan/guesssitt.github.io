var mysound;

function check_1() {

    alert('WoW.....         Correct Answer');

    function preload() {

        mySound = new sound("audio/Correct-answer.mp3");
        mysound.play();

    }
}

function wrong_1() {
    alert('Ohhh no..    Its wrong!!!');
}