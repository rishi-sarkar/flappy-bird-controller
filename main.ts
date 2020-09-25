input.touchA1.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    light.showRing(
    `white white white white white blue blue blue blue blue`
    )
    light.setAll(0x999999)
})
input.touchA5.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    light.showRing(
    `red red red red red white white white white white`
    )
    light.setAll(0x999999)
})
forever(function () {
    input.touchA1.setThreshold(850)
    input.touchA5.setThreshold(850)
    light.setAll(0x999999)
    light.setBrightness(12)
})
