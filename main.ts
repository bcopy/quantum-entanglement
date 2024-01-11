radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 42) {
        measureEntanglement()
    }
})
input.onButtonPressed(Button.A, function () {
    triggerEntanglement()
})
function beatingHeart () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(200)
    basic.showIcon(IconNames.Heart)
    basic.pause(200)
}
input.onButtonPressed(Button.B, function () {
    triggerEntanglement()
})
input.onGesture(Gesture.Shake, function () {
    triggerEntanglement()
})
function measureEntanglement () {
    measuring = 1
    led.setBrightness(255)
    basic.showIcon(IconNames.Square)
    for (let index = 0; index <= 10; index++) {
        led.setBrightness(Math.map(index, 0, 10, 50, 255))
        basic.pause(200)
    }
    for (let index = 0; index <= 30; index++) {
        displayUpDown(index)
        basic.pause(100)
    }
    for (let index = 0; index <= 3; index++) {
        displayUpDown(index)
        basic.pause(200)
    }
    displayUpDown(randint(0, 10))
    basic.pause(10000)
    measuring = 0
}
function displayUpDown (value: number) {
    if (value % 2 == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
    } else {
        basic.showLeds(`
            # # # # #
            . # # # .
            . . # . .
            . . . . .
            . . . . .
            `)
    }
}
function triggerEntanglement () {
    radio.sendNumber(42)
    measureEntanglement()
}
let measuring = 0
radio.setGroup(42)
radio.setTransmitPower(7)
measuring = 0
basic.forever(function () {
    if (measuring != 1) {
        led.setBrightness(189)
        beatingHeart()
        basic.pause(5000)
        if (randint(0, 42) == 4) {
            triggerEntanglement()
        }
    }
})
