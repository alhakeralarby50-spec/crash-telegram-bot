const { Telegraf, Markup } = require("telegraf");

// قراءة التوكن من متغيرات البيئة
const BOT_TOKEN = process.env.BOT_TOKEN || "8670693662:AAGixUlUC-zhHkqxH2v0iYfVYRrbMwEde2Q";
const bot = new Telegraf(BOT_TOKEN);

const ADMIN_ID = 8532581499;
const DEVELOPER_USERNAME = "Xcrash0X";

// قاعدة بيانات مؤقتة للأكواد
let codesDatabase = {};

// 1. القائمة الرئيسية عند كتابة /start
bot.start((ctx) => {
  return ctx.reply(
    "أهلاً بك يا غالي في بوت التوقع والتسلية! 🎮\nاختر ما ترغب به من القائمة أدناه:",
    Markup.inlineKeyboard([
      [Markup.button.url("🎮 تشغيل التطبيق (العب الآن)", "https://u3v2dd-o1tk6d8qd-arcadawebapps7.vercel.app/")],
      [
        Markup.button.callback("🎟️ تفعيل كود", "verify_code"),
        Markup.button.callback("💎 باقات الأكواد والأسعار", "buy_codes")
      ],
      [
        Markup.button.callback("📊 التوقعات والخدمات", "SERVICES_INFO"),
        Markup.button.callback("ℹ️ تعليمات الاستخدام", "help_info")
      ],
      [Markup.button.callback("👨‍💻 التواصل مع الدعم والإدارة", "CONTACT_SUPPORT")]
    ])
  );
});

// 2. تفعيل كود
bot.action("verify_code", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "من فضلك، أرسل الكود الخاص بك بالشكل التالي:\n`/activate KEK-XXXX`",
    { parse_mode: "Markdown" }
  );
});

// 3. تعليمات الاستخدام
bot.action("help_info", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    'هذا البوت مخصص لتفعيل أكواد لعبة Crash Predictor. اختر "باقات الأكواد والأسعار" لمعرفة الأسعار المتاحة.'
  );
});

// 4. قائمة الأسعار وأزرار الشراء التفاعلية
bot.action("buy_codes", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "اختر باقة الأكواد التي تريد شراءها:",
    Markup.inlineKeyboard([
      [Markup.button.url("كود 10 | 120eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_10`)],
      [Markup.button.url("كود 20 | 210eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_20`)],
      [Markup.button.url("كود 30 | 310eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_30`)],
      [Markup.button.url("كود 40 | 400eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_40`)],
      [Markup.button.url("كود 50 | 500eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_50`)],
      [Markup.button.url("كود 60 | 590eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_60`)],
      [Markup.button.url("كود 70 | 690eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_70`)],
      [Markup.button.url("كود 80 | 790eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_80`)],
      [Markup.button.url("كود 90 | 880eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_90`)],
      [Markup.button.url("💎 CODE 100 | 900Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_CODE_100`)],
      [Markup.button.url("💎 CODE 200 | 1800Eg", `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_CODE_200`)],
      [Markup.button.callback("🔙 العودة للقائمة الرئيسية", "MAIN_MENU")]
    ])
  );
});

// 5. قسم التوقعات والخدمات
bot.action("SERVICES_INFO", (ctx) => {
  ctx.answerCbQuery();
  const servicesText = `📊 **مميزات وخدمات البوت:**\n\n` +
    `• خوارزميات تحليل وقت الكراش بدقة عالية.\n` +
    `• عداد تنازلي وسريع للتحليل المستمر.\n` +
    `• واجهة ويب سهلة وسريعة الاستخدام.`;

  return ctx.replyWithMarkdown(servicesText, Markup.inlineKeyboard([
    [Markup.button.url("🎮 دخول اللعبة", "https://u3v2dd-o1tk6d8qd-arcadawebapps7.vercel.app/")],
    [Markup.button.callback("🔙 العودة للقائمة الرئيسية", "MAIN_MENU")]
  ]));
});

// 6. الدعم الفني
bot.action("CONTACT_SUPPORT", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    `👨‍💻 **للتواصل مع الإدارة والدعم الفني:**\n\nراسلنا مباشرة عبر الحساب التالي: @${DEVELOPER_USERNAME}`,
    Markup.inlineKeyboard([
      [Markup.button.callback("🔙 العودة للقائمة الرئيسية", "MAIN_MENU")]
    ])
  );
});

// 7. العودة للقائمة الرئيسية
bot.action("MAIN_MENU", (ctx) => {
  ctx.answerCbQuery();
  return ctx.reply(
    "القائمة الرئيسية 🎮:",
    Markup.inlineKeyboard([
      [Markup.button.url("🎮 تشغيل التطبيق (العب الآن)", "https://u3v2dd-o1tk6d8qd-arcadawebapps7.vercel.app/")],
      [
        Markup.button.callback("🎟️ تفعيل كود", "verify_code"),
        Markup.button.callback("💎 باقات الأكواد والأسعار", "buy_codes")
      ],
      [
        Markup.button.callback("📊 التوقعات والخدمات", "SERVICES_INFO"),
        Markup.button.callback("ℹ️ تعليمات الاستخدام", "help_info")
      ],
      [Markup.button.callback("👨‍💻 التواصل مع الدعم والإدارة", "CONTACT_SUPPORT")]
    ])
  );
});

// 8. معالجة النصوص والأوامر (/activate & /addcode)
bot.on("text", (ctx) => {
  const text = ctx.message.text.trim();

  // أمر تفعيل الكود
  if (text.startsWith("/activate")) {
    const parts = text.split(" ");
    if (parts.length < 2) {
      return ctx.reply("الاستخدام الخاطئ. اكتب:\n`/activate KEK-XXXX`", { parse_mode: "Markdown" });
    }
    const code = parts[1].trim();
    if (codesDatabase[code]) {
      if (codesDatabase[code].used) {
        return ctx.reply("❌ عذراً، هذا الكود تم استخدامه مسبقاً!");
      }
      codesDatabase[code].used = true;
      return ctx.reply(`✅ تم تفعيل الكود بنجاح!\nمتبقي لديك ${codesDatabase[code].rounds} جولات.`);
    } else {
      return ctx.reply("❌ الكود غير صحيح.");
    }
  }

  // أمر إضافة كود (للأدمن فقط)
  if (text.startsWith("/addcode")) {
    if (ctx.from.id !== ADMIN_ID) {
      return ctx.reply("عذراً، هذا الأمر للمسؤول فقط.");
    }
    const args = text.split(" ");
    if (args.length < 3) {
      return ctx.reply("الاستخدام: `/addcode CODE 5`", { parse_mode: "Markdown" });
    }
    const code = args[1];
    const rounds = parseInt(args[2]);
    codesDatabase[code] = { rounds: rounds, used: false };
    return ctx.reply(`✅ تم إضافة الكود (${code}) بـ ${rounds} جولات بنجاح.`);
  }

  return ctx.reply(
    "🚫 عذراً، لا أستقبل رسائل نصية عشوائية. يرجى استخدام الأزرار التفاعلية أو الأوامر المخصصة."
  );
});

// مسح أي Webhook قديم وتشغيل الـ Polling المستمر
bot.telegram.deleteWebhook({ drop_pending_updates: true })
  .then(() => bot.launch())
  .then(() => console.log("Bot merged successfully and listening..."))
  .catch((err) => console.error("Launch Error:", err));

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
