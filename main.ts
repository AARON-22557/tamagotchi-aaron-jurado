input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Happy)
    basic.showLeds(`
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        . # # # .
        `)
    basic.showString("m m m que bo ")
    music.play(music.createSoundExpression(
    WaveShape.Triangle,
    2702,
    124,
    255,
    6,
    2000,
    SoundExpressionEffect.Tremolo,
    InterpolationCurve.Linear
    ), music.PlaybackMode.InBackground)
})
basic.showIcon(IconNames.Happy)
