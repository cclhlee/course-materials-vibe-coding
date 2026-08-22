# 程式設計與網頁資料庫應用 —— 課堂練習題庫（Replit 匯入版）

本repo收錄第3-8週課堂動手實作練習的起始檔／解答檔，供教師直接以「Import from GitHub」匯入 Replit 使用，減少每週備課的環境架設時間。

## 使用方式

1. 開啟 [Replit](https://replit.com)，點選 Create Repl → Import from GitHub。
2. 貼上本repo網址，選擇要匯入的資料夾對應的子路徑（Replit會匯入整個repo，可在匯入後只開啟需要的週次資料夾）。
3. 各練習資料夾內都有：
   - `README.md`：學習目標、操作步驟、測試資料、提示、討論問題
   - 起始檔（`starter.*` 或 `buggy.*`）：課堂上分享給學生的版本
   - 解答檔（`solution.*`）：課後或除錯挑戰後公布的參考答案
   - `.replit`：Replit執行設定，匯入後可直接按「Run」

## 週次對照

- [第3週：變數、資料型態與條件判斷](./week03-variables-conditionals/)
- [第4週：迴圈、函式與除錯基礎](./week04-loops-functions-debugging/)
- [第5週：資料結構與程式風格規範](./week05-data-structures-code-style/)
- [第6週：網頁基礎：HTML/CSS與使用者介面](./week06-html-css-ui/)
- [第7週：資料庫基礎與SQL入門](./week07-sql-database-intro/)
- [第8週：期中評量與期末專案主題發表](./week08-midterm-project-proposal/)

## 最佳作業範例

每週資料夾內的 `homework-best-example/` 子資料夾收錄該週實際指定作業的範例作品，供課堂展示「符合要求的完整範例」使用。

## 資料庫SQL檔案

第7、8週牽涉資料庫的練習，額外提供可直接於 psql／Replit PostgreSQL 執行的 `.sql` 指令檔，見 `week07-sql-database-intro/` 與 `week08-midterm-project-proposal/` 資料夾。

## 第9-15週（模組二：延伸專案實作）

- [第9週：專案啟動：需求分析與資料庫schema設計](./week09-project-kickoff-schema-design/)
- [第10週：後端開發：AI協作實作CRUD功能](./week10-backend-crud-ai-collab/)
- [第11週：實作工作坊①：CRUD強化與前後端串接練習](./week11-workshop1-crud-integration/)
- [第12週：前後端整合、使用者驗證與資安基礎](./week12-auth-security-basics/)
- [第13週：實作工作坊②：資安修補與多重視角同儕程式碼審查](./week13-workshop2-security-peer-review/)
- [第14週：部署上線與文件撰寫](./week14-deployment-documentation/)
- [第15週：實作工作坊③與個別Code Interview](./week15-workshop3-code-interview/)

模組二各週延續「用藥提醒系統」案例，部分練習屬於討論／口頭／書面型活動（無獨立程式檔，直接參考各週README的操作步驟與測試資料），有程式碼的練習則同樣附上起始檔／解答檔與`.replit`設定。
