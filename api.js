// === API CONFIG ===
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbz0_z9iTzQ8TCxRFAT0BuGm2Ak2Wbs6iF4hzTpYJqR0e0kvGz0edvvmuiNp-atLuZpi/exec';

async function apiGet(path, params = {}) {
  const q = new URLSearchParams({ fn: path, ...params }).toString();
  const r = await fetch(`${WEB_APP_URL}?${q}`, { method: 'GET' });
  return r.json();
}

async function apiPost(path, payload){
  const r = await fetch(`${WEB_APP_URL}?fn=${path}`, {
    method: 'POST',
    // Pakai text/plain agar tidak memicu preflight CORS
    headers: { 'Content-Type': 'text/plain;charset=utf-8' },
    body: JSON.stringify(payload),
  });
  // Kalau mau lihat error response, bisa pakai r.text() dulu
  return r.json();
}


// Global API object
const API = {
  listCampaigns: () => apiGet('campaigns'),
  listLinks: (campaign_id) => apiGet('links', { campaign_id }),
  getBalance: (buzzer_id) => apiGet('balance', { buzzer_id }),
  submitProof: (data) => apiPost('submit', data),
  redeem: (data) => apiPost('redeem', data),
};
