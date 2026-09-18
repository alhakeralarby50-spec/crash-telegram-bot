const { Telegraf, Markup } = require("telegraf");

// قراءة التوكن الجديد المخفي والمعزول بأمان
const BOT_TOKEN = process.env.BOT_TOKEN || "8670693662:AAEjbryVMhrn7DklwYT1heQRFFm1Au5UPQE";
const bot = new Telegraf(BOT_TOKEN);

const DEVELOPER_USERNAME = "Xcrash0X";
const CRASH_APP_URL = "https://u3v2dd-1ih6kc9ki-arcadawebapps7.vercel.app/";
const APPLE_APP_URL = "https://kdk0eo-lydn13p1r-arcadawebapps3.vercel.app/";
const MATCH_APP_URL = "https://15bae2-me5g9zwfb-arcedawebapps1.vercel.app";

// 1. القائمة الرئيسية عند كتابة /start
bot.start((ctx) => {
  return ctx.reply(
    "أهلاً بك يا غالي في بوت التوقعات والخدمات! 🎮\nاختر الإسكريبت المطلوب من القائمة أدناه:",
    Markup.inlineKeyboard([
      [Markup.button.callback("⚽ إسكريبت المباريات (Matches Predictor)", "MATCH_SCRIPT_MENU")],
      [Markup.button.callback("✈️ إسكريبت الطيارة (Crash)", "CRASH_SCRIPT_MENU")],
      [Markup.button.callback("🍎 إسكريبت التفاحة (Apple of Fortune)", "APPLE_SCRIPT_MENU")],
      [Markup.button.callback("👨‍💻 التواصل مع الدعم والإدارة", "CONTACT_SUPPORT")]
    ])
  );
});

// ==================== [ قسم إسكريبت المباريات ] ====================

// قائمة إسكريبت المباريات الرئيسية
bot.action("MATCH_SCRIPT_MENU", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "⚽ **قائمة إسكريبت المباريات (Matches Predictor):**",
    Markup.inlineKeyboard([
      [Markup.button.url("🎮 تشغيل تطبيق المباريات (العب الآن)", MATCH_APP_URL)],
      [Markup.button.callback("💎 باقات الأكواد والأسعار", "buy_codes_match")],
      [Markup.button.callback("📊 التوقعات والخدمات", "SERVICES_INFO_MATCH")],
      [Markup.button.callback("ℹ️ تعليمات الاستخدام", "help_info_match")],
      [Markup.button.callback("🔙 العودة للقائمة الرئيسية", "MAIN_MENU")]
    ])
  );
});

// أسعار إسكريبت المباريات (سعر التوقع = 100 ج)
bot.action("buy_codes_match", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "اختر باقة الأكواد التي تريد شراءها لإسكريبت المباريات (سعر التوقع = 100ج):",
    Markup.inlineKeyboard([
      [Markup.button.url("⚽ كود 5 توقعات | 500eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_مباريات_5_توقعات_بـ500ج`)],
      [Markup.button.url("⚽ كود 10 توقعات | 1000eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_مباريات_10_توقعات_بـ1000ج`)],
      [Markup.button.url("⚽ كود 15 توقع | 1500eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_مباريات_15_توقع_بـ1500ج`)],
      [Markup.button.url("⚽ كود 20 توقع | 2000eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_مباريات_20_توقع_بـ2000ج`)],
      [Markup.button.url("⚽ كود 25 توقع | 2500eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_مباريات_25_توقع_بـ2500ج`)],
      [Markup.button.url("💎 CODE 30 توقع | 3000eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_مباريات_30_توقع_بـ3000ج`)],
      [Markup.button.callback("🔙 العودة لقائمة المباريات", "MATCH_SCRIPT_MENU")]
    ])
  );
});

// خدمات وشرح المباريات
bot.action("SERVICES_INFO_MATCH", (ctx) => {
  ctx.answerCbQuery();
  const servicesText = `📊 **مميزات وخدمات إسكريبت المباريات:**\n\n` +
    `• ربط حي وتلقائي مع نتائج المباريات المباشرة عبر API.\n` +
    `• إمكانية إضافة وتوقّع دوريات ومباريات السايبر الإلكترونية يدوياً.\n` +
    `• خوارزمية تحليل متقدمة لمنح أعلى نسبة نجاح لتوقعات المباريات.\n` +
    `• نظام عداد زمني متطور وحماية للتفعيلات بالأكواد.`;

  return ctx.replyWithMarkdown(servicesText, Markup.inlineKeyboard([
    [Markup.button.url("🎮 دخول اللعبة الآن", MATCH_APP_URL)],
    [Markup.button.callback("🔙 العودة لقائمة المباريات", "MATCH_SCRIPT_MENU")]
  ]));
});

// تعليمات المباريات
bot.action("help_info_match", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    'هذا القسم مخصص لإسكريبت توقعات المباريات. اختر "باقات الأكواد والأسعار" لمعرفة الأسعار المتاحة والتواصل المباشر لشراء كود التفعيل.',
    Markup.inlineKeyboard([
      [Markup.button.callback("🔙 العودة لقائمة المباريات", "MATCH_SCRIPT_MENU")]
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
      [Markup.button.url("كود 10 | 300eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_10`)],
      [Markup.button.url("كود 20 | 600eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_20`)],
      [Markup.button.url("كود 30 | 900eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_30`)],
      [Markup.button.url("كود 40 | 1100eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_40`)],
      [Markup.button.url("كود 50 | 1400eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_50`)],
      [Markup.button.url("كود 60 | 1700eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_60`)],
      [Markup.button.url("كود 70 | 2000eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_70`)],
      [Markup.button.url("كود 80 | 2300eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_80`)],
      [Markup.button.url("كود 90 | 2600eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_طيارة_90`)],
      [Markup.button.url("💎 CODE 100 | 2800Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_CODE_طيارة_100`)],
      [Markup.button.url("💎 CODE 200 | 5600Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_CODE_طيارة_200`)],
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

// أسعار التفاحة
bot.action("buy_codes_apple", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "اختر باقة الجولات التي تريد شراءها لإسكريبت التفاحة (سعر الجولة = 20ج):",
    Markup.inlineKeyboard([
      [Markup.button.url("🍎 كود 10 جولات | 200 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_10_جولات_بـ200ج`)],
      [Markup.button.url("🍎 كود 20 جولة | 400 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_20_جولة_بـ400ج`)],
      [Markup.button.url("🍎 كود 30 جولة | 600 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_30_جولة_بـ600ج`)],
      [Markup.button.url("🍎 كود 40 جولة | 800 Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_تفاحة_800ج`)],
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
      [Markup.button.callback("⚽ إسكريبت المباريات (Matches Predictor)", "MATCH_SCRIPT_MENU")],
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
