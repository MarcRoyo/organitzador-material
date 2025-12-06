document.addEventListener('DOMContentLoaded', function () {
  const pingEl = document.getElementById('pingResult');
  fetch('/ping')
    .then(r => r.json())
    .then(j => {
      pingEl.textContent = 'Ping response: ' + (j.message || JSON.stringify(j));
    })
    .catch(e => {
      pingEl.textContent = 'Ping failed: ' + e;
    });

  const helloBtn = document.getElementById('helloBtn');
  const helloOutput = document.getElementById('helloOutput');
  helloBtn.addEventListener('click', () => {
    helloOutput.textContent = 'Hello from the static JS!';
  });
});