//import { promises as fsp } from "fs";
import { parse as yamlParse } from "yaml";

interface APIsConfig {
  apis: API[];
}

interface API {
  name: string;
  url: string;
  proxies: string[];
}

let apisConfigContent: string;
//apisConfigContent = fsp.readFile("apis-config.yml", {
  //    encoding: "utf8",
   // });

apisConfigContent = `# apis-config.yml
apis:
  - name: API_1
    url: "api1.example.com"
    proxies:
      - "proxy-a.com"
      - "proxy-b.com"
  
  - name: API_2
    url: "api2.example.com"
    proxies:
      - "proxy-c.com"
      - "proxy-d.com"
      - "proxy-e.com"
  - ...
`;
const config = yamlParse(apisConfigContent) as APIsConfig;

function greet(name: string): string {
  return `${JSON.stringify(config, null, 2)}`;
}

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
    console.log(greet('User'));
  });
});