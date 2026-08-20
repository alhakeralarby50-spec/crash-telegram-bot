const { Telegraf } = require('telegraf');

// ضع هنا توكن البوت الخاص بك إذا لم يكن محفوظاً في متغيرات البيئة
const BOT_TOKEN = process.env.BOT_TOKEN || 'حط_التوكن_هنا_لو_مش_معمول_في_Environment';

const bot = new Telegraf(BOT_TOKEN);

// رسالة الترحيب مع زر اللينك
bot.start((ctx) => {
  ctx.reply('أهلاً بيك يا غالي في بوت التوقع والتسلية! 🎮\nاضغط على الزر أدناه عشان تدخل اللعبة فوراً وتجرب حظك:', {
    reply_markup: {
      inline_keyboard: [
        [
          { 
            text: '🎮 العب الآن (اضغط هنا)', 
            url: 'https://u3v2dd-o1tk6d8qd-arcadawebapps7.vercel.app/' 
          }
        ]
      ]
    }
  });
});

// تشغيل البوت
bot.launch().then(() => {
  console.log('Bot is running successfully!');
});

// التعامل مع إيقاف البوت بشكل آمن
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
