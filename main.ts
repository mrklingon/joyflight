joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P14, joystickbit.ButtonType.down, function () {
    if (1 > speed) {
        speed += -1
    }
})
input.onButtonPressed(Button.A, function () {
    torpedo = game.createSprite(ship.get(LedSpriteProperty.X), ship.get(LedSpriteProperty.Y))
    torpedo.set(LedSpriteProperty.Direction, torpedo.get(LedSpriteProperty.Direction))
    for (let index = 0; index < 4; index++) {
        torpedo.move(1)
        basic.pause(100)
    }
    torpedo.delete()
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    ship.turn(Direction.Right, 45)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P13, joystickbit.ButtonType.down, function () {
    if (10 > speed) {
        speed += 1
    }
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    ship.turn(Direction.Left, 45)
})
let torpedo: game.LedSprite = null
let ship: game.LedSprite = null
let speed = 0
joystickbit.initJoystickBit()
speed = 5
let XBase = joystickbit.getRockerValue(joystickbit.rockerType.X)
ship = game.createSprite(2, 4)
basic.forever(function () {
    ship.move(1)
    basic.pause(2000 / speed)
    ship.ifOnEdgeBounce()
})
