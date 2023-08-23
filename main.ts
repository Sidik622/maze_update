function right () {
    sparkbitO.rotateMotorModule(SparkbitOutPort.Output2, SparkbitDirection.Clockwise, 45)
    basic.pause(1000)
    sparkbitO.stopMotorModule(SparkbitOutPort.Output2)
    basic.pause(1000)
}
function lefr () {
    sparkbitO.rotateMotorModule(SparkbitOutPort.Output2, SparkbitDirection.Counterclockwise, 45)
    basic.pause(1000)
    sparkbitO.stopMotorModule(SparkbitOutPort.Output2)
    basic.pause(1000)
}
function backward () {
    sparkbitO.rotateMotorModule(SparkbitOutPort.Output3, SparkbitDirection.Clockwise, 45)
    basic.pause(1000)
    sparkbitO.stopMotorModule(SparkbitOutPort.Output3)
    basic.pause(1000)
}
function forward () {
    sparkbitO.rotateMotorModule(SparkbitOutPort.Output3, SparkbitDirection.Counterclockwise, 45)
    basic.pause(1000)
    sparkbitO.stopMotorModule(SparkbitOutPort.Output3)
    basic.pause(1000)
}
basic.forever(function () {
    basic.showIcon(IconNames.SmallHeart)
    right()
    backward()
    lefr()
    backward()
    right()
    lefr()
    basic.showIcon(IconNames.Happy)
    right()
    forward()
    lefr()
    right()
    lefr()
    basic.showIcon(IconNames.House)
})
