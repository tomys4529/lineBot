# LINE Reminder Bot

LINEとGoogleカレンダーを連携して、予定のリマインダーを毎朝8時に送信するBotです。

---

## 概要

このBotは、Googleカレンダーから予定を取得し、LINE公式アカウントを通じてリマインダー通知を送信します。  
GoogleのOAuth2認証を利用して安全にユーザーのカレンダー情報へアクセスします。

---

## 主な機能

- ✅ Googleカレンダーから予定を取得  
- ✅ LINE公式アカウント（Bot）にリマインダーを自動送信  
- ✅ OAuth2による安全な認証フロー

---

## 利用技術

| 技術名                 | 説明                        |
| ------------------- | ------------------------- |
| Google Apps Script  | Googleサービス連携のスクリプト開発環境    |
| Google Calendar API | カレンダー情報取得のAPI             |
| LINE Messaging API  | LINE Botとの通信API           |
| Node.js             | ローカル開発やサーバー側処理で使用         |
| Ngrok               | ローカルサーバーをインターネット公開するツール   |
| OAuth2ライブラリ         | GASでOAuth2認証を簡単に実装するライブラリ |
| Render              | Node.jsアプリのクラウドホスティングサービス |

---

## セットアップ方法

以下の手順に沿って環境を準備してください。

1. **Google Cloud ConsoleでOAuth2クライアントIDとシークレットIDを取得する**  
   - [Google Cloud Console](https://console.cloud.google.com/)にアクセスし、新規プロジェクトを作成します。  
   - 「API とサービス」＞「OAuth同意画面」を設定し、テストユーザーに自身のGoogleアカウントを追加します。  
   - 「認証情報」＞「OAuth 2.0 クライアントID」を作成し、承認済みのリダイレクトURIに  
     ```
     https://script.google.com/macros/d/【スクリプトID】/usercallback
     ```  
     を登録してください。

2. **Google Apps ScriptにOAuth2ライブラリを追加する**  
   - Apps Scriptエディタの「ライブラリ」から、ライブラリID  
     `1B7cH6mKh3tQJs5f0U-y-T3lZr5LHmE9fC1Z0cWn4Q1jfQTVz3mN6mBdx`  
     を追加してください。

3. **スクリプトプロパティにクライアントIDとシークレットを登録する**  
   - 「ファイル」＞「プロジェクトのプロパティ」＞「スクリプトのプロパティ」タブで、以下のキーと値を登録します。  
     - `CLIENT_ID`: 取得したクライアントID  
     - `CLIENT_SECRET`: 取得したクライアントシークレット

4. **コードをApps Scriptに貼り付けてデプロイする**  
   - OAuth2認証やGoogleカレンダー連携のコードを貼り付けます。  
   - 「デプロイ」＞「新しいデプロイ」＞「ウェブアプリ」を選択し、  
     - 実行ユーザーを「自分」  
     - アクセスできるユーザーを「自分のみ（テスト用）」に設定します。  
   - デプロイURLを控えます。

5. **認証を完了させる**  
   - デプロイしたURLにブラウザでアクセスし、表示される認証リンクからGoogleアカウントの認証を完了してください。  
   - 「認証成功」と表示されれば準備完了です。

6. **LINE公式アカウントのWebhook URLに設定する**  
   - LINE DevelopersコンソールでWebhook URLにデプロイURLを登録し、Webhookを有効にします。

7. **動作テスト**  
   - Apps Scriptの`listCalendarEvents()`関数を実行し、Googleカレンダーの予定が取得できるか確認してください。  
   - 問題なければLINE Bot連携もテストしてください。

---

## プライバシーポリシー

- ユーザーのGoogleカレンダー情報は、このBotのリマインダー通知送信の目的でのみ利用します。  
- 個人情報（LINEユーザーIDやGoogleカレンダー情報）は外部に共有せず、安全に管理します。

---

## 注意事項

- このBotを利用するにはGoogleアカウントが必要です。  
- このBotを利用するにはGoogleの認証が必要になります。  
- 本サービスはGoogleの審査を経て公開予定です。

---

## 開発者

- Name: SatoHrioki
- Address: glay45290615@gmail.com
