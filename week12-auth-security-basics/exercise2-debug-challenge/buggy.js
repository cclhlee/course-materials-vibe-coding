// 有SQL Injection風險的查詢寫法（字串拼接，未使用參數化查詢）
app.get('/api/schedule', (req, res) => {
  const userId = req.query.userId; // 直接來自使用者輸入，未經驗證
  const sql = "SELECT * FROM 用藥時程 WHERE 使用者ID = '" + userId + "'";
  db.query(sql, (err, rows) => {
    res.json(rows);
  });
});
