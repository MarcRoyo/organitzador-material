document.addEventListener('DOMContentLoaded', function () {
    var pingEl = document.getElementById('pingResult');
    fetch('/ping')
        .then(function (r) { return r.json(); })
        .then(function (j) {
        pingEl.textContent = 'Ping response: ' + (j.message || JSON.stringify(j));
    })
        .catch(function (e) {
        pingEl.textContent = 'Ping failed: ' + e;
    });
    var helloBtn = document.getElementById('helloBtn');
    var helloOutput = document.getElementById('helloOutput');
    helloBtn.addEventListener('click', function () {
        helloOutput.textContent = 'Hello from the static JS!';
    });
});
