require('dotenv').config();
const express = require('express');
const { Client, middleware } = require('@line/bot-sdk');
const axios = require('axios');

const config = {
  channelAccessToken: process.env.LINE_CHANNEL_ACCESS_TOKEN,
  channelSecret: process.env.LINE_CHANNEL_SECRET,
};

const client = new Client(config);
const app = express();

app.post('/webhook', middleware(config), async (req, res) => {
  try {
    const events = req.body.events;

    for (const event of events) {
      const userId = event.source.userId;

      if (event.type === 'follow') {
        await axios.post(process.env.GAS_API_URL, { userId });
        await client.replyMessage(event.replyToken, {
          type: 'text',
          text: '友達登録ありがとうございます！Googleカレンダーの予定を自動でリマインドします！QOL爆上げしましょう！！！！',
        });

      } else if (event.type === 'message' && event.message.type === 'text') {
        await axios.post(process.env.GAS_API_URL, { userId });
        await client.replyMessage(event.replyToken, {
          type: 'text',
          text: 'やっほー！登録情報を確認しました📋',
        });
      }
    }

    res.status(200).send('OK');
  } catch (error) {
    console.error('Webhook処理エラー:', error);
    res.status(500).send('Error');
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
