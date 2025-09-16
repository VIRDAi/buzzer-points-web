<script>
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbz9B0ACFB72a83Knm5DyJjRG8zRui08LsYRNXustRZsVmY73RVeUOAr3rSI8kkjRXDFbg/exec';

async function apiGet(path, params={}){
  const q = new URLSearchParams({fn:path, ...params}).toString();
  const r = await fetch(`${WEB_APP_URL}?${q}`, { method:'GET' });
  return r.json();
}

async function apiPost(path, payload){
  const r = await fetch(`${WEB_APP_URL}?fn=${path}`, {
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body: JSON.stringify(payload),
  });
  return r.json();
}

// APIs
const API = {
  listCampaigns: () => apiGet('campaigns'),
  listLinks: (campaign_id) => apiGet('links', {campaign_id}),
  getBalance: (buzzer_id) => apiGet('balance', {buzzer_id}),
  submitProof: (data) => apiPost('submit', data),
  redeem: (data) => apiPost('redeem', data),
};
</script>
