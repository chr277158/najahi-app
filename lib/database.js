// lib/database.js
const { neon } = require('@neondatabase/serverless');

// إنشاء اتصال بقاعدة البيانات
const sql = neon(process.env.DATABASE_URL);

module.exports = sql;