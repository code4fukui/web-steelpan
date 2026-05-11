# web-steelpan

AudioWorkletを使用したウェブベースのスティールパンエミュレータ。キーボード、ボタン、およびGamepad API経由でのPlayStation Access Controllerの入力に対応しています。[デモ](https://code4fukui.github.io/web-steelpan/)

## デモ
https://code4fukui.github.io/web-steelpan/

## 機能
- 以下の方法によるスティールパンサンプルの演奏:
  - 数字キー `1-8`
  - 画面上のボタン
  - [PlayStation Access Controller](https://www.playstation.com/ja-jp/accessories/access-controller/) (マッピング: △=C, ◯=D, □=E, X=F, L1=G, R1=A, L2=B, R2=C)
- ゲームパッドのSelectボタンによる半音モード
- オーディオ出力デバイスの選択
- 音量調整スライダー
- Web Audio APIとAudioWorkletによる低遅延のサンプル再生

## 要件
- Gamepad APIをサポートするモダンブラウザ（Chrome/Edgeでテスト済み）
- [PlayStation Access Controller](https://www.playstation.com/ja-jp/accessories/access-controller/)（オプション）

## 使い方
1. **START**をクリックしてオーディオコンテキストを初期化
2. 以下のいずれかを使用して演奏:
   - 数字キー `1-8`
   - 画面上のC-D-E-F-G-A-B-Cボタン
   - 接続したAccess Controllerのボタン
3. スライダーで音量を調整
4. ドロップダウンからオーディオ出力デバイスを選択
5. **STOP**をクリックしてオーディオリソースを解放

## データ / API
- スティールパンサンプル: [sound-cc0](https://github.com/code4fukui/sound-cc0) の [CC0ライセンス](https://github.com/code4fukui/sound-cc0) `steel1.wav`
- ゲームパッド入力: [Gamepad API](https://developer.mozilla.org/en-US/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- オーディオ処理: [AudioWorklet](https://developer.mozilla.org/en-US/docs/Web/API/AudioWorklet)

## ライセンス
ライセンス情報 [LICENSE](LICENSE)
