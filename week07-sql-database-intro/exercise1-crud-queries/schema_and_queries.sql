-- ============================================================
-- 第7週：資料庫基礎與SQL入門
-- 範例資料庫 schema + 測試資料 + 練習查詢
-- 用途：課堂展示、學生匯入 psql / Replit PostgreSQL 環境快速還原
-- 對應教材：第7週閱讀教材、第7週簡報 動手實作練習
-- ============================================================

-- 若表已存在，先清除（方便重複匯入測試）
DROP TABLE IF EXISTS 用藥紀錄;
DROP TABLE IF EXISTS 掛號記錄;
DROP TABLE IF EXISTS 病患;

-- ------------------------------------------------------------
-- 1. 建立三張表（含主鍵、外鍵關聯）
-- ------------------------------------------------------------

CREATE TABLE 病患 (
  病患ID SERIAL PRIMARY KEY,
  姓名 VARCHAR(50) NOT NULL,
  生日 DATE,
  性別 VARCHAR(10)
);

CREATE TABLE 掛號記錄 (
  掛號ID SERIAL PRIMARY KEY,
  病患ID INTEGER REFERENCES 病患(病患ID),
  掛號日期 DATE NOT NULL,
  科別 VARCHAR(30)
);

CREATE TABLE 用藥紀錄 (
  用藥ID SERIAL PRIMARY KEY,
  掛號ID INTEGER REFERENCES 掛號記錄(掛號ID),
  藥品名稱 VARCHAR(50) NOT NULL,
  劑量 VARCHAR(20),
  服用頻率 VARCHAR(20)
);

-- ------------------------------------------------------------
-- 2. 匯入測試資料（與教材「測試資料」表格完全一致）
-- ------------------------------------------------------------

INSERT INTO 病患 (病患ID, 姓名, 生日, 性別)
VALUES (1, '王小明', '1960-05-12', '男');

INSERT INTO 掛號記錄 (掛號ID, 病患ID, 掛號日期, 科別)
VALUES (101, 1, '2026-08-10', '家醫科');

INSERT INTO 用藥紀錄 (用藥ID, 掛號ID, 藥品名稱, 劑量, 服用頻率)
VALUES (201, 101, 'Metformin', '500mg', '每日兩次');

-- 讓 SERIAL 序列從下一個可用值開始，避免課堂上手動再新增記錄時撞號
SELECT setval(pg_get_serial_sequence('病患', '病患id'), (SELECT MAX(病患id) FROM 病患));
SELECT setval(pg_get_serial_sequence('掛號記錄', '掛號id'), (SELECT MAX(掛號id) FROM 掛號記錄));
SELECT setval(pg_get_serial_sequence('用藥紀錄', '用藥id'), (SELECT MAX(用藥id) FROM 用藥紀錄));

-- ------------------------------------------------------------
-- 3. 動手實作練習：參考解答查詢（對應簡報「解答：參考範例程式碼」頁）
-- ------------------------------------------------------------

-- 查詢王小明（病患ID=1）的所有掛號記錄，並關聯出對應的用藥紀錄
SELECT 掛號記錄.掛號日期, 掛號記錄.科別, 用藥紀錄.藥品名稱, 用藥紀錄.劑量
FROM 掛號記錄
JOIN 用藥紀錄 ON 掛號記錄.掛號ID = 用藥紀錄.掛號ID
WHERE 掛號記錄.病患ID = 1;

-- 延伸練習（對應討論問題）：查詢所有科別為家醫科、且用藥種類包含 Metformin 的病患姓名
SELECT DISTINCT 病患.姓名
FROM 病患
JOIN 掛號記錄 ON 病患.病患ID = 掛號記錄.病患ID
JOIN 用藥紀錄 ON 掛號記錄.掛號ID = 用藥紀錄.掛號ID
WHERE 掛號記錄.科別 = '家醫科' AND 用藥紀錄.藥品名稱 = 'Metformin';
