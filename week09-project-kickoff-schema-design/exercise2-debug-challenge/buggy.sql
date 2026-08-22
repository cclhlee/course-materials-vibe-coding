-- 錯誤範例：姓名重複儲存、缺外鍵、用字串存日期
CREATE TABLE 使用者 (
  使用者ID SERIAL PRIMARY KEY,
  姓名 VARCHAR(50)
);

CREATE TABLE 用藥時程 (
  時程ID SERIAL PRIMARY KEY,
  姓名 VARCHAR(50),
  藥名 VARCHAR(50),
  劑量 VARCHAR(20)
);

CREATE TABLE 服藥紀錄 (
  紀錄ID SERIAL PRIMARY KEY,
  姓名 VARCHAR(50),
  服用日期 VARCHAR(30),
  狀態 VARCHAR(10)
);
