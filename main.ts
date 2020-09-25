input.onButtonPressed(Button.A, function () {
    devices.raiseAlertTo(MesAlertEvent.Vibrate)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Hello!")
    devices.raiseAlertTo(MesAlertEvent.DisplayToast)
})
bluetooth.startAccelerometerService()
bluetooth.startLEDService()
