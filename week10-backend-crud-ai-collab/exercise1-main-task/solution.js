// Create：新增一筆用藥時程，使用參數化查詢避免SQL Injection
async function addSchedule(userId, drugName, dose, time, frequency) {
  const result = await pool.query(
    'INSERT INTO 用藥時程 (使用者ID, 藥名, 劑量, 服用時間, 頻率) VALUES ($1, $2, $3, $4, $5) RETURNING 時程ID;',
    [userId, drugName, dose, time, frequency]
  );
  return result.rows[0];
}
