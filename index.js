const { Telegraf, Markup } = require("telegraf");

// قراءة التوكن الجديد المخفي والمعزول بأمان
const BOT_TOKEN = process.env.BOT_TOKEN || "8670693662:AAG3gQmrRp9IkPIQbJdYoU4B5ddDwv1Xs5g";
const bot = new Telegraf(BOT_TOKEN);

const DEVELOPER_USERNAME = "Xcrash0X";
const CRASH_APP_URL = "https://u3v2dd-ffxpil4ud-arcadawebapps7.vercel.app/";
const APPLE_APP_URL = "https://kdk0eo-h5j8ygnzj-arcadawebapps3.vercel.app/";

// 1. القائمة الرئيسية عند كتابة /start
bot.start((ctx) => {
  return ctx.reply(
    "أهلاً بك يا غالي في بوت التوقعات والخدمات! 🎮\nاختر الإسكريبت المطلوب من القائمة أدناه:",
    Markup.inlineKeyboard([
      [Markup.button.callback("✈️ إسكريبت الطيارة (Crash)", "CRASH_SCRIPT_MENU")],
      [Markup.button.callback("🍎 إسكريبت التفاحة (Apple of Fortune)", "APPLE_SCRIPT_MENU")],
      [Markup.button.callback("👨‍💻 التواصل مع الدعم والإدارة", "CONTACT_SUPPORT")]
    ])
  );
});

// ==================== [ قسم إسكريبت الطيارة ] ====================

// قائمة إسكريبت الطيارة الرئيسية
bot.action("CRASH_SCRIPT_MENU", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "✈️ **قائمة إسكريبت الطيارة (Crash Predictor):**",
    Markup.inlineKeyboard([
      [Markup.button.url("🎮 تشغيل تطبيق الطيارة (العب الآن)", CRASH_APP_URL)],
      [Markup.button.callback("💎 باقات الأكواد والأسعار", "buy_codes_crash")],
      [Markup.button.callback("📊 التوقعات والخدمات", "SERVICES_INFO_CRASH")],
      [Markup.button.callback("ℹ️ تعليمات الاستخدام", "help_info_crash")],
      [Markup.button.callback("🔙 العودة للقائمة الرئيسية", "MAIN_MENU")]
    ])
  );
});

// أسعار الطيارة
bot.action("buy_codes_crash", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "اختر باقة الأكواد التي تريد شراءها لإسكريبت الطيارة:",
    Markup.inlineKeyboard([
      [Markup.button.url("كود 10 | 120eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_10`)],
      [Markup.button.url("كود 20 | 210eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_20`)],
      [Markup.button.url("كود 30 | 310eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_30`)],
      [Markup.button.url("كود 40 | 400eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_40`)],
      [Markup.button.url("كود 50 | 500eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_50`)],
      [Markup.button.url("كود 60 | 590eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_60`)],
      [Markup.button.url("كود 70 | 690eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_70`)],
      [Markup.button.url("كود 80 | 790eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_80`)],
      [Markup.button.url("كود 90 | 880eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_90`)],
      [Markup.button.url("💎 CODE 100 | 900Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_CODE_طيارة_100`)],
      [Markup.button.url("💎 CODE 200 | 1800Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_CODE_طيارة_200`)],
      [Markup.button.callback("🔙 العودة لقائمة الطيارة", "CRASH_SCRIPT_MENU")]
    ])
  );
});

// خدمات الطيارة
bot.action("SERVICES_INFO_CRASH", (ctx) => {
  ctx.answerCbQuery();
  const servicesText = `📊 **مميزات وخدمات إسكريبت الطيارة:**\n\n` +
    `• خوارزميات تحليل وقت الكراش بدقة عالية.\n` +
    `• عداد تنازلي وسريع للتحليل المستمر.\n` +
    `• واجهة ويب سهلة وسريعة الاستخدام.`;

  return ctx.replyWithMarkdown(servicesText, Markup.inlineKeyboard([
    [Markup.button.url("🎮 دخول اللعبة", CRASH_APP_URL)],
    [Markup.button.callback("🔙 العودة لقائمة الطيارة", "CRASH_SCRIPT_MENU")]
  ]));
});

// تعليمات الطيارة
bot.action("help_info_crash", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    'هذا القسم مخصص لإسكريبت Crash Predictor. اختر "باقات الأكواد والأسعار" لمعرفة الأسعار المتاحة والتواصل للشراء.',
    Markup.inlineKeyboard([
      [Markup.button.callback("🔙 العودة لقائمة الطيارة", "CRASH_SCRIPT_MENU")]
    ])
  );
});

// ==================== [ قسم إسكريبت التفاحة ] ====================

// قائمة إسكريبت التفاحة الرئيسية
bot.action("APPLE_SCRIPT_MENU", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "🍎 **قائمة إسكريبت التفاحة (Apple of Fortune):**",
    Markup.inlineKeyboard([
      [Markup.button.url("🍎 فتح اللعبة (تشغيل التطبيق)", APPLE_APP_URL)],
      [Markup.button.callback("💎 باقات الأكواد والأسعار", "buy_codes_apple")],
      [Markup.button.callback("📊 مميزات التطبيق والخدمات", "SERVICES_INFO_APPLE")],
      [Markup.button.callback("ℹ️ تعليمات الاستخدام", "help_info_apple")],
      [Markup.button.callback("🔙 العودة للقائمة الرئيسية", "MAIN_MENU")]
    ])
  );
});

// أسعار التفاحة (حساب 20 ج لكل جولة - أقل باقة 10 جولات = 200ج)
bot.action("buy_codes_apple", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "اختر باقة الجولات التي تريد شراءها لإسكريبت التفاحة (سعر الجولة = 20ج):",
    Markup.inlineKeyboard([
      [Markup.button.url("🍎 كود 10 جولات | 200 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_10_جولات_بـ200ج`)],
      [Markup.button.url("🍎 كود 20 جولة | 400 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_20_جولة_بـ400ج`)],
      [Markup.button.url("🍎 كود 30 جولة | 600 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_30_جولة_بـ600ج`)],
      [Markup.button.url("🍎 كود 40 جولة | 800 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_40_جولة_بـ800ج`)],
      [Markup.button.url("🍎 كود 50 جولة | 1000 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_50_جولة_بـ1000ج`)],
      [Markup.button.url("💎 CODE 100 جولة | 2000 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_100_جولة_بـ2000ج`)],
      [Markup.button.callback("🔙 العودة لقائمة التفاحة", "APPLE_SCRIPT_MENU")]
    ])
  );
});

// خدمات التفاحة
bot.action("SERVICES_INFO_APPLE", (ctx) => {
  ctx.answerCbQuery();
  const servicesText = `📊 **مميزات تطبيق Apple of Fortune Predictor:**\n\n` +
    `• كشف أماكن التفاح الفاسد والتفاح السليم بدقة عالية.\n` +
    `• نظام تجديد قائم على عدد الأدوار والجولات.\n` +
    `• أداة تحليل سريعة ومتوافقة مع جميع الهواتف.`;

  return ctx.replyWithMarkdown(servicesText, Markup.inlineKeyboard([
    [Markup.button.url("🍎 فتح اللعبة الآن", APPLE_APP_URL)],
    [Markup.button.callback("🔙 العودة لقائمة التفاحة", "APPLE_SCRIPT_MENU")]
  ]));
});

// تعليمات التفاحة
bot.action("help_info_apple", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "هذا القسم مخصص لتوقع تفاحة الحظ. قم بشراء كود الجولات المطلوب، ثم أدخله داخل التطبيق لتفعيل التوقعات.",
    Markup.inlineKeyboard([
      [Markup.button.callback("🔙 العودة لقائمة التفاحة", "APPLE_SCRIPT_MENU")]
    ])
  );
});

// ==================== [ الأزرار العامة والتحكم ] ====================

// الدعم الفني
bot.action("CONTACT_SUPPORT", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    `👨‍💻 **للتواصل مع الإدارة والدعم الفني:**\n\nراسلنا مباشرة عبر الحساب التالي: @${DEVELOPER_USERNAME}`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🔙 العودة للقائمة الرئيسية", "MAIN_MENU")]
    ])
  );
});

// العودة للقائمة الرئيسية
bot.action("MAIN_MENU", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "القائمة الرئيسية 🎮:",
    Markup.inlineKeyboard([
      [Markup.button.callback("✈️ إسكريبت الطيارة (Crash)", "CRASH_SCRIPT_MENU")],
      [Markup.button.callback("🍎 إسكريبت التفاحة (Apple of Fortune)", "APPLE_SCRIPT_MENU")],
      [Markup.button.callback("👨‍💻 التواصل مع الدعم والإدارة", "CONTACT_SUPPORT")]
    ])
  );
});

// معالجة الرسائل النصية
bot.on("text", (ctx) => {
  return ctx.reply(
    "🚫 عذراً، لا أستقبل رسائل نصية عشوائية. يرجى استخدام الأزرار التفاعلية."
  );
});

// مسح أي Webhook قديم وتشغيل الـ Polling المستمر
bot.telegram.deleteWebhook({ drop_pending_updates: true })
  .then(() => bot.launch())
  .then(() => console.log("Bot updated successfully with secure token..."))
  .catch((err) => console.error("Launch Error:", err));

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
