// 修正版：使用參數化查詢，避免SQL Injection
app.get('/api/schedule', (req, res) => {
  const userId = req.query.userId;
  if (!userId || !Number.isInteger(Number(userId))) {
    return res.status(400).json({ message: '使用者ID格式錯誤' }); // 輸入驗證
  }
  const sql = 'SELECT * FROM 用藥時程 WHERE 使用者ID = ?';
  db.query(sql, [userId], (err, rows) => { // 參數化查詢，資料庫driver負責安全轉義
    if (err) return res.status(500).json({ message: '查詢失敗' });
    res.json(rows);
  });
});
