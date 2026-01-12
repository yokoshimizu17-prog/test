let count = 0
let running = true

input.onButtonPressed(Button.A, function () {
    // Aボタンでカウントを止める
    running = false
})

input.onButtonPressed(Button.B, function () {
    // Bボタンでカウントを0にリセットして表示
    count = 0
    basic.showNumber(count)
})

basic.forever(function () {
    if (running) {
        count += 1
        basic.showNumber(count)
        basic.pause(1000) // 1秒ごとにカウントアップ
    } else {
        basic.pause(100) // 停止中は小休止（CPU負荷軽減）
    }
})
