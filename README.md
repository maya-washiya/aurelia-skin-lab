# AURELIA SKIN LAB — GitHub Pages用プロジェクト

現在公開中のAURELIA SKIN LABのHTML、CSS、JavaScript、画像をそのまま収録しています。デザイン・文章・画像・レスポンシブCSS・FAQ・相談デモフォームの動作は変更していません。元のサイト自体が静的サイトのため、`docs/`内のファイルが編集用ソースと公開用ファイルを兼ねます。ビルドは不要です。

## GitHub Pagesで公開する

1. ZIPを展開します。
2. `aurelia-skin-lab-github-pages`フォルダの**中身**をGitHubリポジトリのルートに追加して、`main`ブランチへコミット・pushします。ZIP自体のアップロードではありません。
3. GitHubのリポジトリで **Settings → Pages** を開きます。
4. **Source: Deploy from a branch**、**Branch: main**、**Folder: /docs** を選び、**Save**を押します。
5. 公開処理の完了後、GitHubが表示するサイトURLを開きます。

`docs/index.html`がトップページです。`docs/.nojekyll`も含めて追加してください。すべてのローカル素材参照は相対パスになっており、リポジトリ名付きのプロジェクトサイトと、ユーザーサイト・独自ドメインのどちらでも使用できます。

GitHub公式手順:
https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 構成と編集方法

- `docs/index.html`: ページ全体のHTML・文章・FAQ・デモフォーム。
- `docs/assets/style.css`: PC／スマートフォンのCSS・フォント指定・アニメーション。
- `docs/assets/script.js`: 相談デモモーダルの開閉・デモ送信。
- `docs/assets/hero.png`: 現行のメイン画像。
- `docs/assets/texture.png`: 現行の抽象画像。
- `docs/.nojekyll`: GitHub Pagesで静的ファイルをそのまま配信するための設定。
- `scripts/preview.mjs`: 任意のローカル確認用サーバー。
- `ASSET-SHA256.json`: 元ファイルとの一致を確認するためのチェックサム。
- `QA.md`: 書き出し時の確認内容。

編集した`docs/`をGitHubへpushすると、Pagesへ反映されます。Node.jsやnpmでのビルド、Cloudflare、サーバーAPIは不要です。

## ローカルで確認する（任意）

Node.js 20以上がある場合、プロジェクトのルートで以下を実行します。依存パッケージのインストールは不要です。

```sh
npm run preview
```

`http://localhost:4173/`を開いて確認します。停止はCtrl+Cです。

## フォントとフォーム

現行のフォント指定をそのまま保持しています。DM Sans、Noto Sans JP、Noto Serif JPは、元サイトと同様にGoogle Fontsから読み込みます。フォントファイルはZIPには含まれず、指定フォントの表示にはGoogle Fontsへの接続が必要です。

フォームは現行どおりデザイン確認用です。送信操作はブラウザ内でデモ完了表示に切り替わるだけで、予約や情報は外部へ送信されません。

このZIPはGitHub Pages用の書き出しです。Sitesのログイン・閲覧制限は含みません。元の公開サイトの設定は変更していません。

## ポートフォリオからリンクする

AURELIAのGitHub Pages公開後、GitHubが表示する実際のURLを控えてください。ポートフォリオのGitHub Pages用プロジェクトでは、`src/data/portfolio.ts`の`webProject.url`をそのURLへ変更し、`npm run build`を実行して更新した`docs/`をpushすると、VIEW PROJECTが新しいAURELIAサイトへ遷移します。

今回のZIP書き出しでは、ポートフォリオ側のリンクは変更していません。
