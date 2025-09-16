<script>
const WEB_APP_URL = 'https://script.googleusercontent.com/macros/echo?user_content_key=AehSKLiPp-as0-gNv6HL6nNIqkJJSr7qrqK0wtdySf_YAi9zNKuFX40dtlNXZq5968VShLWf7CwgQBFFlA0JWUVUIvsULjac3mxVY89x1vkbhY_zEKADVgM2dqj2MOWI-9l9VjDG5833glt-L-QOQv_GK95kl89-ULOPF4tQaNNMTopXWcKk9BZWf5A7OrjYcoeEFXNkMr16Un_sXTSBUXfjx1GTV-Ga4GPP1rmX86YNo9t59QfFYUJ57jXjbb4uZYCC87wqkIDG1fD5BFzBgCYr1j6egTusQmYlNig5lpIwsWwZNAUWILc&lib=MR6uHCzNVGMmPDtdlHhpcGoLdMI28qpWa';

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
