// 錯誤1：字串拼接使用者輸入的藥名，存在SQL injection風險
function addSchedule(userId, drugName) {
  return pool.query("INSERT INTO 用藥時程 (使用者ID, 藥名) VALUES (" + userId + ", '" + drugName + "');");
}

// 錯誤2：Update沒有檢查是否真的更新到資料
function updateDose(scheduleId, newDose) {
  pool.query('UPDATE 用藥時程 SET 劑量 = $1 WHERE 時程ID = $2;', [newDose, scheduleId]);
  console.log('更新成功');
}

// 錯誤3：Delete忘記加WHERE條件，會刪除全部用藥時程
function deleteSchedule() {
  pool.query('DELETE FROM 用藥時程;');
}
