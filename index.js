const { Telegraf } = require('telegraf');

// التأكد من وجود التوكن
const token = process.env.BOT_TOKEN;
if (!token) {
  console.error('Error: BOT_TOKEN environment variable is missing!');
  process.exit(1);
}

const bot = new Telegraf(token);

// رسالة الترحيب مع زر اللينك
bot.start((ctx) => {
  ctx.reply('أهلاً بيك يا غالي في بوت التوقع والتسلية! 🎮\nاضغط على الزر أدناه عشان تدخل اللعبة فوراً:', {
    reply_markup: {
      inline_keyboard: [
        [
          { text: '🎮 العب الآن (اضغط هنا)', url: 'https://u3v2dd-o1tk6d8qd-arcadawebapps7.vercel.app/' }
        ]
      ]
    }
  });
});

// بدء البوت مع معالجة الأخطاء لمنع الكراش
bot.launch().then(() => {
  console.log('Bot is running successfully and connected to Telegram!');
}).catch((err) => {
  console.error('Failed to launch bot:', err);
});

// التعامل مع إيقاف البوت بشكل آمن
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
