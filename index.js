const { Telegraf, Markup } = require("telegraf");

const BOT_TOKEN = "8670693662:AAGixUlUC-zhHkqxH2v0iYfVYRrbMwEde2Q";
const bot = new Telegraf(BOT_TOKEN);
const ADMIN_ID = 8532581499;
const DEVELOPER_USERNAME = "Xcrash0X";

// قاعدة بيانات مؤقتة للأكواد
let codesDatabase = {};

// رسالة البداية (القائمة الرئيسية)
bot.start((ctx) => {
  ctx.reply(
    "أهلاً بك يا أحمد في بوت أكواد اللعبة! 🎮\nاختر ما ترغب به من القائمة أدناه:",
    Markup.inlineKeyboard([
      [Markup.button.callback("🎟️ تفعيل كود", "verify_code")],
      [Markup.button.callback("💳 شراء أكواد", "buy_codes")],
      [Markup.button.callback("ℹ️ تعليمات الاستخدام", "help_info")],
    ])
  );
});

// رسالة زر تفعيل كود
bot.action("verify_code", (ctx) => {
  ctx.reply(
    "من فضلك، أرسل الكود الخاص بك بالشكل التالي:\n`/activate KEK-XXXX`"
  );
});

// رسالة زر تعليمات الاستخدام
bot.action("help_info", (ctx) => {
  ctx.reply(
    'هذا البوت مخصص لتفعيل أكواد لعبة Crash Predictor. اختر "شراء أكواد" لمعرفة الأسعار والباقات المتاحة.'
  );
});

// قائمة الأسعار وأزرار الشراء التفاعلية (منسقة وبدون رموز غريبة)
bot.action("buy_codes", (ctx) => {
  ctx.reply(
    "اختر باقة الأكواد التي تريد شراءها:",
    Markup.inlineKeyboard([
      [
        Markup.button.url(
          "كود 10 | 120eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_10`
        ),
      ],
      [
        Markup.button.url(
          "كود 20 | 210eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_20`
        ),
      ],
      [
        Markup.button.url(
          "كود 30 | 310eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_30`
        ),
      ],
      [
        Markup.button.url(
          "كود 40 | 400eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_40`
        ),
      ],
      [
        Markup.button.url(
          "كود 50 | 500eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_50`
        ),
      ],
      [
        Markup.button.url(
          "كود 60 | 590eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_60`
        ),
      ],
      [
        Markup.button.url(
          "كود 70 | 690eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_70`
        ),
      ],
      [
        Markup.button.url(
          "كود 80 | 790eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_80`
        ),
      ],
      [
        Markup.button.url(
          "كود 90 | 880eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_كود_90`
        ),
      ],
      [
        Markup.button.url(
          "💎 CODE 100 | 900Eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_CODE_100`
        ),
      ],
      [
        Markup.button.url(
          "💎 CODE 200 | 1800Eg",
          `https://t.me/${DEVELOPER_USERNAME}?text=طلب_شراء_CODE_200`
        ),
      ],
    ])
  );
});

// التعامل مع النصوص والأوامر
bot.on("text", (ctx) => {
  const text = ctx.message.text.trim();

  // أمر تفعيل الكود
  if (text.startsWith("/activate")) {
    const parts = text.split(" ");
    if (parts.length < 2) {
      return ctx.reply("الاستخدام الخاطئ. اكتب:\n`/activate KEK-XXXX`");
    }
    const code = parts[1].trim();
    if (codesDatabase[code]) {
      if (codesDatabase[code].used) {
        return ctx.reply("❌ عذراً، هذا الكود تم استخدامه مسبقاً!");
      }
      codesDatabase[code].used = true;
      return ctx.reply(
        `✅ تم تفعيل الكود بنجاح!\nمتبقي لديك ${codesDatabase[code].rounds} جولات.`
      );
    } else {
      return ctx.reply("❌ الكود غير صحيح.");
    }
  }

  // أمر إضافة كود للأدمن
  if (text.startsWith("/addcode")) {
    if (ctx.from.id !== ADMIN_ID) {
      return ctx.reply("عذراً، هذا الأمر للمسؤول فقط.");
    }
    const args = text.split(" ");
    if (args.length < 3) {
      return ctx.reply("الاستخدام: `/addcode CODE 5`");
    }
    const code = args[1];
    const rounds = parseInt(args[2]);
    codesDatabase[code] = { rounds: rounds, used: false };
    return ctx.reply(`✅ تم إضافة الكود (${code}) بـ ${rounds} جولات بنجاح.`);
  }

  // رفض أي نص عشوائي
  return ctx.reply(
    "🚫 عذراً، لا أستقبل رسائل نصية عشوائية. يرجى استخدام الأزرار التفاعلية أو الأوامر المخصصة."
  );
});

bot.launch();
console.log("Telegram Bot CrashApp2026 is running...");

process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
