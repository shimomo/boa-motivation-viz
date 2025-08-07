# BOA Motivation Viz

[BOA Motivation Viz](https://shimomo.github.io/boa-motivation-viz/) は、ボートレースの出走表データを元に選手の体重増減からモチベーションを可視化するWebアプリケーションです。体重の変動から、選手のやる気やコンディションを視覚的に捉えることができます。Next.jsで開発し、GitHub Pagesにデプロイしています。

## 主な機能
- 出走表データのAPI取得と解析：外部APIから最新の出走情報を取得し、選手ごとの体重を抽出
- 体重増減の一覧表示：レースごとに選手の体重変化を一覧形式で表示
- シンプルで直感的なUI：視認性を重視した構成で、変化の傾向がすぐに把握できます

## データ取得元
本アプリで使用している出走表データは、以下の別リポジトリで開発・公開している疑似APIから取得しています。

- リポジトリ名: [BoatraceOpenAPI/programs](https://github.com/BoatraceOpenAPI/programs)
- 公開先URL: GitHub Pagesを利用した静的サイトとして提供
- APIの仕様や更新状況により、本アプリの動作に影響が出る場合があります。

## 技術スタック
- フロントエンド：Next.js
- デザイン：Tailwind CSS
- デプロイ先：GitHub Pages

## デプロイ
- 静的ファイルを生成してGitHub Pagesで公開しています。
- 公開先URL: [https://shimomo.github.io/boa-motivation-viz/](https://shimomo.github.io/boa-motivation-viz/)

## 今後の予定
- 体重増減からモチベーション指標を定量化し、より分かりやすく表示
- 体重以外のデータの追加
- モバイル対応の改善

## 注意事項
- データの正確性は保証しません。取得元の仕様変更等により動作が変わる可能性があります。

## ライセンス
BOA Motivation Vizは [MITライセンス](LICENSE) の元で公開されています。
