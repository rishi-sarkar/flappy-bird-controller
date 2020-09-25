input.touchA2.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.B)
    light.setAll(0x0000ff)
    pause(200)
    light.setAll(0x999999)
})
input.touchA4.onEvent(ButtonEvent.Click, function () {
    makerController.player1.press(ArcadeButton.A)
    light.setAll(0xff0000)
    pause(200)
    light.setAll(0x999999)
})
input.touchA2.setThreshold(685)
input.touchA4.setThreshold(685)
light.setAll(0x999999)
light.setBrightness(12)
forever(function () {
	
})
