const configuredApiUrl = import.meta.env.VITE_API_URL || '';
const API_BASE = import.meta.env.DEV
  ? configuredApiUrl || 'http://localhost:5000'
  : configuredApiUrl.includes('localhost')
    ? ''
    : configuredApiUrl;

export const api = {
  async get(endpoint) {
    const res = await fetch(`${API_BASE}${endpoint}`);
    if (!res.ok) throw new Error(`API Error: ${res.status}`);
    return res.json();
  },
  async post(endpoint, data) {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    if (!res.ok) throw new Error(json.error || 'Request failed');
    return json;
  }
};

export default api;
