```
  ________                            .__        
 /  _____/  ____   ____   ____   _____|__| ______
/   \  ____/ __ \ /    \_/ __ \ /  ___/  |/  ___/
\    \_\  \  ___/|   |  \  ___/ \___ \|  |\___ \ 
 \______  /\___  >___|  /\___  >____  >__/____  >
        \/     \/     \/     \/     \/        \/ 
```

---

- This project involves the development of my personal website https://jsoulis.com, which is hosted on an AWS EC2 instance.

---

- The EC2 instance is fronted by Cloudflare, which provides DNS management, reverse proxy, CDN, and DDoS protection.

- NGINX serves the static React application on the backend.

- Certbot has been configured to enable HTTPS rather than just HTTP for secure connections.

---

- Lambda functions and CloudWatch events have been implemented to automate the server shutdown and bootup process.

  - This will occur daily from 12 PM PDT to 7 AM PDT to save costs.

---

- The site will feature all projects I have worked on that I have not yet posted or shared, as well as projects I am currently working on.

- For additional information, please contact me at **jsoulis@pm.me**

- Thank you, and I hope you enjoy your stay :D

---

- Home page preview:

![Homepage Screenshot](./src/assets/images/Home-Page_v2.png)

