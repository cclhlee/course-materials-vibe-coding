// 片段一：新增服藥紀錄表單送出後，狀態欄位一直顯示為空
// 前端表單送出時使用的欄位名稱是 status，但後端讀取的是 recordStatus
// --- 前端（片段） ---
async function submitRecord(scheduleId, status) {
  const res = await fetch('/api/records', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ scheduleId, status }),
  });
  return res.json();
}

// --- 後端（片段） ---
app.post('/api/records', (req, res) => {
  const { scheduleId, recordStatus } = req.body; // 欄位名稱與前端不一致
  db.query(
    'INSERT INTO 服藥紀錄 (時程ID, 服用日期時間, 狀態) VALUES ($1, NOW(), $2);',
    [scheduleId, recordStatus]
  );
  res.send('已新增');
});

// 片段二：服藥紀錄清單依日期排序結果錯亂
// 日期以字串比較，而非轉換為Date物件後比較
function sortRecordsByDate(records) {
  return records.sort((a, b) => a.服用日期時間 > b.服用日期時間 ? 1 : -1);
  // 若服用日期時間是像 '2026-8-2' 這種未補零的字串，字串比較會得到錯誤順序
}

// 片段三：刪除用藥時程後，清單畫面沒有立即更新
// 刪除請求未使用await就重新讀取列表，導致畫面用的是刪除前的舊資料
function deleteSchedule(scheduleId) {
  fetch(`/api/schedules/${scheduleId}`, { method: 'DELETE' });
  refreshScheduleList(); // 沒有等待DELETE請求完成，列表可能還沒更新
}
