input.onButtonPressed(Button.A, function () {
    basic.showString("" + (MXN_))
    basic.showString("MXN=")
    basic.showString("" + (USD))
    basic.showString("USD")
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (MXN_))
    basic.showString("MXN=")
    basic.showString("" + (EUR))
    basic.showString("EUR")
})
let EUR = 0
let USD = 0
let MXN_ = 0
MXN_ = 5
USD = MXN_ * 21.2917
EUR = MXN_ * 25.2917
basic.forever(function () {
	
})
