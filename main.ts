input.touchA1.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    light.setAll(0x0000ff)
    pause(200)
    light.setAll(0x999999)
})
input.touchA5.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    light.setAll(0xff0000)
    pause(200)
    light.setAll(0x999999)
})
forever(function () {
    input.touchA1.setThreshold(850)
    input.touchA5.setThreshold(850)
    light.setBrightness(12)
})
