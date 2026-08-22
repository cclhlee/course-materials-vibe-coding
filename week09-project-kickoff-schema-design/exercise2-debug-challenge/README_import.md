## 如何匯入

匯入Replit後開啟Shell，執行：

```bash
psql $DATABASE_URL -f buggy.sql
```

或於本機/課堂展示機安裝PostgreSQL後執行：

```bash
psql -U <你的帳號> -d <資料庫名稱> -f buggy.sql
```
