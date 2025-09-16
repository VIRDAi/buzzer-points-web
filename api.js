<script>
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwrhr2v4ARKcpiTsfw8S-ocuOmqvDj69zrj3WTKoJdqGbD6agBB5Ls_xThQL2EbencX3Q/exec';

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
