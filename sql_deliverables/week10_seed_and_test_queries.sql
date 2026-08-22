-- ============================================================
-- 第10週：後端開發 —— 「用藥提醒系統」CRUD種子資料與測試查詢
-- 對應教材：第10週閱讀教材／簡報 練習1（Create+Read功能）
--           與練習2（除錯挑戰：一次性生成CRUD程式碼中的錯誤）
-- 用途：搭配 week10-backend-crud-ai-collab/ 的Node.js程式碼練習，
--       先執行本檔建立schema與種子資料，再用pg pool連線測試CRUD函式。
-- 前置需求：需先執行 week09_schema_design.sql 建立資料表（或直接執行本檔，
--           本檔已包含相同的CREATE TABLE語句，可獨立執行）。
-- ============================================================

DROP TABLE IF EXISTS 服藥紀錄;
DROP TABLE IF EXISTS 用藥時程;
DROP TABLE IF EXISTS 使用者;

CREATE TABLE 使用者 (
  使用者ID SERIAL PRIMARY KEY,
  姓名 VARCHAR(50) NOT NULL,
  聯絡電話 VARCHAR(20)
);

CREATE TABLE 用藥時程 (
  時程ID SERIAL PRIMARY KEY,
  使用者ID INTEGER NOT NULL REFERENCES 使用者(使用者ID),
  藥名 VARCHAR(50) NOT NULL,
  劑量 VARCHAR(20) NOT NULL,
  服用時間 TIME NOT NULL,
  頻率 VARCHAR(20)
);

CREATE TABLE 服藥紀錄 (
  紀錄ID SERIAL PRIMARY KEY,
  時程ID INTEGER NOT NULL REFERENCES 用藥時程(時程ID),
  服用日期時間 TIMESTAMP NOT NULL,
  狀態 VARCHAR(10) NOT NULL DEFAULT '未服用'
);

-- ------------------------------------------------------------
-- 種子資料：供練習1 addSchedule()／練習2 三個CRUD函式測試使用
-- ------------------------------------------------------------

INSERT INTO 使用者 (姓名, 聯絡電話) VALUES
  ('王奶奶', '0912-345-678'),
  ('陳爺爺', '0922-111-222');

INSERT INTO 用藥時程 (使用者ID, 藥名, 劑量, 服用時間, 頻率) VALUES
  (1, 'Metformin', '500mg', '08:00', '每日兩次'),
  (1, 'Metformin', '500mg', '20:00', '每日兩次'),
  (2, 'Amlodipine', '5mg', '08:00', '每日一次');

-- ------------------------------------------------------------
-- 練習1驗證查詢：對應 addSchedule() 的Create功能
-- 在Node.js中呼叫 addSchedule(2, 'Aspirin', '100mg', '09:00', '每日一次') 後，
-- 可用以下查詢確認是否新增成功：
-- ------------------------------------------------------------
SELECT * FROM 用藥時程 WHERE 使用者ID = 2 ORDER BY 時程ID DESC LIMIT 1;

-- ------------------------------------------------------------
-- 練習2驗證查詢：對應修正版 updateDose() 與 deleteSchedule()
-- ------------------------------------------------------------

-- 測試修正版updateDose(1, '750mg')：應成功更新且RETURNING有回傳一列
UPDATE 用藥時程 SET 劑量 = '750mg' WHERE 時程ID = 1 RETURNING 時程ID;

-- 測試修正版updateDose(999, '750mg')（不存在的時程ID）：
-- RETURNING應回傳0列，驗證程式碼有正確印出「更新失敗：查無此筆時程」
UPDATE 用藥時程 SET 劑量 = '750mg' WHERE 時程ID = 999 RETURNING 時程ID;

-- 測試修正版deleteSchedule(3)：應只刪除時程ID=3那一筆，其餘不受影響
-- 執行前先確認目前資料筆數：
SELECT COUNT(*) AS 執行前筆數 FROM 用藥時程;
DELETE FROM 用藥時程 WHERE 時程ID = 3;
SELECT COUNT(*) AS 執行後筆數 FROM 用藥時程;

-- 對照：錯誤版deleteSchedule()（無WHERE條件）會刪除全部資料，
-- 課堂demo時可在另一份測試資料庫上執行以下語句展示風險（正式環境切勿執行）：
-- DELETE FROM 用藥時程;
