app.post('/schedule', (req, res) => {
  const sql = "INSERT INTO 用藥時程 (使用者ID, 藥名, 劑量, 服用時間, 頻率) VALUES (" +
    req.body.userId + ",'" + req.body.drugName + "','" + req.body.dose + "','" +
    req.body.time + "','" + req.body.frequency + "')";
  db.query(sql, (err, result) => {
    res.send('新增成功');
  });
});
