// 模擬登入與權限檢查的最小範例
let currentUser = null;

function login(account, password) {
  const user = users.find(u => u.account === account && u.password === password);
  if (!user) { console.log('帳號或密碼錯誤'); return false; }
  currentUser = user;
  return true;
}

function canEditSchedule(scheduleUserId) {
  return currentUser && currentUser.id === scheduleUserId;
}
