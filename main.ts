input.onButtonPressed(Button.A, function () {
    counter += 3 // Aボタンを押したとき、数字が3ずつ増えるように変更
})
/**
 * カウンターを作る
 */
let counter = 0
// 0からスタート
counter += 1
// 1増やす
basic.showNumber(counter)
