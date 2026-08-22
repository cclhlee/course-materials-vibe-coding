// 修正一：前後端欄位名稱統一為 status
app.post('/api/records', (req, res) => {
  const { scheduleId, status } = req.body; // 與前端欄位名稱一致
  db.query(
    'INSERT INTO 服藥紀錄 (時程ID, 服用日期時間, 狀態) VALUES ($1, NOW(), $2);',
    [scheduleId, status]
  );
  res.send('已新增');
});

// 修正二：轉換為Date物件後再比較，避免字串比較造成排序錯亂
function sortRecordsByDate(records) {
  return records.sort((a, b) => new Date(a.服用日期時間) - new Date(b.服用日期時間));
}

// 修正三：等待DELETE請求完成後才重新讀取列表
async function deleteSchedule(scheduleId) {
  await fetch(`/api/schedules/${scheduleId}`, { method: 'DELETE' });
  await refreshScheduleList();
}
