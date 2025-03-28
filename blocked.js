
// blocked.js
const urlParams = new URLSearchParams(window.location.search);
const blockedSite = urlParams.get('site');
if (blockedSite) {
  console.log(`Blocked site: ${blockedSite}`);
  document.getElementById('blocked-message').textContent = `You are trying to access ${blockedSite}, which is blocked by Focus Guard.`;
}

document.getElementById('back-btn').addEventListener('click', function() {
  console.log('Redirecting to YouTube...');
  window.location.href = 'https://www.youtube.com/';
});