## 如何匯入

匯入Replit後開啟 Shell，執行：

```bash
psql $DATABASE_URL -f schema_and_queries.sql
```

或於本機/課堂展示機安裝PostgreSQL後直接執行：

```bash
psql -U <你的帳號> -d <資料庫名稱> -f schema_and_queries.sql
```
