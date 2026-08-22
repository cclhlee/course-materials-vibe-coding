app.post('/schedule', (req, res) => {
  const { userId, drugName, dose, time, frequency } = req.body;
  if (!userId || !drugName || !time) {
    return res.status(400).send('請填寫必填欄位：使用者、藥名、服用時間');
  }
  const sql = 'INSERT INTO 用藥時程 (使用者ID, 藥名, 劑量, 服用時間, 頻率) VALUES ($1, $2, $3, $4, $5)';
  db.query(sql, [userId, drugName, dose, time, frequency], (err, result) => {
    if (err) { return res.status(500).send('新增失敗，請稍後再試'); }
    res.send('新增成功');
  });
});
