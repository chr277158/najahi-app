// lib/database.js
const { neon } = require('@neondatabase/serverless');

// التحقق من وجود متغير البيئة
if (!process.env.DATABASE_URL) {
    console.error('❌ DATABASE_URL غير معرّف!');
    throw new Error('DATABASE_URL environment variable is not set');
}

// إنشاء اتصال بقاعدة البيانات
const sql = neon(process.env.DATABASE_URL);

module.exports = sql;