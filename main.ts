input.onButtonPressed(Button.A, function () {
    // 0からスタート
    counter += 3 // Aボタンを押したとき、数字が2ずつ増えるように変更
})
/**
 * カウンターを作る
 */
let counter = 0
// 0からスタート
counter += 3
// 3増やす
basic.showNumber(counter)
