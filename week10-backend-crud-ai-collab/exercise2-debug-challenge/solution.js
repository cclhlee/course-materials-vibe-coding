// 修正1：改用參數化查詢，使用者輸入永遠被當作資料值
function addSchedule(userId, drugName) {
  return pool.query('INSERT INTO 用藥時程 (使用者ID, 藥名) VALUES ($1, $2);', [userId, drugName]);
}

// 修正2：檢查RETURNING結果是否為空，若為空代表找不到該筆時程
async function updateDose(scheduleId, newDose) {
  const result = await pool.query(
    'UPDATE 用藥時程 SET 劑量 = $1 WHERE 時程ID = $2 RETURNING 時程ID;',
    [newDose, scheduleId]
  );
  if (result.rows.length === 0) {
    console.log('更新失敗：查無此筆時程');
  } else {
    console.log('更新成功');
  }
}

// 修正3：加上WHERE條件，只刪除指定時程ID的那一筆
function deleteSchedule(scheduleId) {
  return pool.query('DELETE FROM 用藥時程 WHERE 時程ID = $1;', [scheduleId]);
}
