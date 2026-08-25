const { Telegraf, Markup } = require("telegraf");

// قراءة التوكن من متغيرات البيئة أو القيمة الافتراضية
const BOT_TOKEN = process.env.BOT_TOKEN || "8670693662:AAGixUlUC-zhHkqxH2v0iYfVYRrbMwEde2Q";
const bot = new Telegraf(BOT_TOKEN);

const DEVELOPER_USERNAME = "Xcrash0X";
const APP_URL = "https://kdk0eo-obmchlf19-arcadawebapps3.vercel.app/";

// 1. القائمة الرئيسية عند كتابة /start
bot.start((ctx) => {
  return ctx.reply(
    "أهلاً بك يا غالي في بوت توقعات لعبة تفاحة الحظ (Apple of Fortune)! 🍎\nاختر ما ترغب به من القائمة أدناه:",
    Markup.inlineKeyboard([
      [Markup.button.url("🍎 تشغيل تطبيق التوقع (دخول اللعبة)", APP_URL)],
      [Markup.button.callback("💎 باقات الأكواد والأسعار", "buy_codes")],
      [
        Markup.button.callback("📊 مميزات التطبيق والخدمات", "SERVICES_INFO"),
        Markup.button.callback("ℹ️ تعليمات الاستخدام", "help_info")
      ],
      [Markup.button.callback("👨‍💻 التواصل مع الدعم والإدارة", "CONTACT_SUPPORT")]
    ])
  );
});

// 2. تعليمات الاستخدام
bot.action("help_info", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    'هذا البوت مخصص لتوجيه واستخدام برنامج توقع تفاحة الحظ (Apple of Fortune Predictor).\n\nقم بشراء الكود عبر قسم الأسعار ثم أدخله مباشرة داخل التطبيق مع ID حساب 1xBet الخاص بك لتفعيل التوقعات.'
  );
});

// 3. قائمة الأسعار وأزرار الشراء التفاعلية
bot.action("buy_codes", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "اختر باقة الأكواد (بعدد الأدوار/الجولات) التي تريد شراءها:",
    Markup.inlineKeyboard([
      [Markup.button.url("🍎 كود 10 جولات | 120 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_10_جولات`)],
      [Markup.button.url("🍎 كود 20 جولة | 210 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_20_جولة`)],
      [Markup.button.url("🍎 كود 30 جولة | 310 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_30_جولة`)],
      [Markup.button.url("🍎 كود 50 جولة | 500 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_50_جولة`)],
      [Markup.button.url("💎 CODE 100 جولة | 900 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_100_جولة`)],
      [Markup.button.url("💎 CODE 200 جولة | 1800 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_200_جولة`)],
      [Markup.button.callback("🔙 العودة للقائمة الرئيسية", "MAIN_MENU")]
    ])
  );
});

// 4. قسم المميزات والخدمات
bot.action("SERVICES_INFO", (ctx) => {
  ctx.answerCbQuery();
  const servicesText = `📊 **مميزات تطبيق Apple of Fortune Predictor:**\n\n` +
    `• كشف أماكن التفاح الفاسد والتفاح السليم بدقة عالية.\n` +
    `• نظام تجديد قائم على عدد الأدوار والجولات.\n` +
    `• بدون أي خيارات رهان أو رصيد داخل التطبيق (أداة تحليل فقط).\n` +
    `• واجهة متوافقة تماماً مع أجهزة الأندرويد والشاشات المختلفة.`;

  return ctx.replyWithMarkdown(servicesText, Markup.inlineKeyboard([
    [Markup.button.url("🍎 فتح التطبيق الآن", APP_URL)],
    [Markup.button.callback("🔙 العودة للقائمة الرئيسية", "MAIN_MENU")]
  ]));
});

// 5. الدعم الفني
bot.action("CONTACT_SUPPORT", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    `👨‍💻 **للتواصل مع الإدارة والدعم الفني:**\n\nراسلنا مباشرة عبر الحساب التالي: @${DEVELOPER_USERNAME}`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🔙 العودة للقائمة الرئيسية", "MAIN_MENU")]
    ])
  );
});

// 6. العودة للقائمة الرئيسية
bot.action("MAIN_MENU", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "القائمة الرئيسية 🎮:",
    Markup.inlineKeyboard([
      [Markup.button.url("🍎 تشغيل تطبيق التوقع (دخول اللعبة)", APP_URL)],
      [Markup.button.callback("💎 باقات الأكواد والأسعار", "buy_codes")],
      [
        Markup.button.callback("📊 مميزات التطبيق والخدمات", "SERVICES_INFO"),
        Markup.button.callback("ℹ️ تعليمات الاستخدام", "help_info")
      ],
      [Markup.button.callback("👨‍💻 التواصل مع الدعم والإدارة", "CONTACT_SUPPORT")]
    ])
  );
});

// 7. معالجة النصوص العامة
bot.on("text", (ctx) => {
  return ctx.reply(
    "🚫 عذراً، لا يتم استقبال أوامر نصية هنا. يرجى استخدام الأزرار التفاعلية للقائمة الرئيسية."
  );
});

// مسح أي Webhook قديم وتشغيل الـ Polling المستمر
bot.telegram.deleteWebhook({ drop_pending_updates: true })
  .then(() => bot.launch())
  .then(() => console.log("Bot updated successfully..."))
  .catch((err) => console.error("Launch Error:", err));

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
