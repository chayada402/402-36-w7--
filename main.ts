function music1 () {
    music.setTempo(120)
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.playTone(220, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(294, music.beat(BeatFraction.Half))
    music.playTone(247, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 4; index++) {
        music1()
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Target)
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(294, music.beat(BeatFraction.Whole))
    music.playTone(262, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 3; index++) {
        music.setTempo(120)
        music.playTone(294, music.beat(BeatFraction.Half))
        music.playTone(330, music.beat(BeatFraction.Half))
        music.playTone(392, music.beat(BeatFraction.Half))
        for (let index = 0; index < 5; index++) {
            music.playTone(392, music.beat(BeatFraction.Half))
        }
    }
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(392, music.beat(BeatFraction.Half))
    music.playTone(370, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Whole))
})
basic.forever(function () {
    led.toggle(randint(0, 4), randint(0, 4))
})
