# Complete Self-Hosted Setup Guide
## Zero Cloud Dependencies - Privacy First

**Total Monthly Cost:**
- Electricity: ~$4-6
- Internet: (already paying)
- Domain: (already own codermana.com)
- **Total: ~$4-6/month**

---

## Architecture Overview

```
Internet
   ↓
Router (Port Forward: 80, 443, 1935)
   ↓
Raspberry Pi 3 (Gateway)
├─ DuckDNS (Free DDNS)
├─ Let's Encrypt (Free SSL)
└─ Nginx (Reverse Proxy)
   ↓
Synology NAS (Main Server)
├─ Gitea (Self-hosted Git + CI/CD)
├─ Gitea Runner (Build executor)
├─ Nginx (Static site)
├─ Owncast (Streaming)
├─ Listmonk (Newsletter)
├─ Remark42 (Comments)
└─ PostgreSQL (Databases)
```

---

## Step-by-Step Setup

### Phase 1: DNS Setup (15 minutes)

#### 1.1 Get DuckDNS Account (Free)
1. Go to https://www.duckdns.org
2. Login with GitHub/Google (or create account)
3. Create subdomain: `codermana`
4. Save your token (you'll need it)

#### 1.2 Configure DNS
In your domain registrar (where you bought codermana.com):

```
Type: CNAME
Name: thehour
Value: codermana.duckdns.org
TTL: 300
```

Optional (if you want separate Gitea domain):
```
Type: CNAME
Name: git
Value: codermana.duckdns.org
TTL: 300
```

---

### Phase 2: Synology NAS Setup (30 minutes)

#### 2.1 Enable SSH
1. Control Panel → Terminal & SNMP
2. Enable SSH service
3. Port: 22

#### 2.2 Install Docker
1. Package Center → Search "Docker"
2. Install Docker

#### 2.3 Create Directory Structure
```bash
# SSH into Synology
ssh admin@your-nas-ip

# Create directories
sudo mkdir -p /volume1/codermana/{web,gitea,gitea-runner,owncast,listmonk,remark42,db,postgres}
sudo chmod -R 755 /volume1/codermana

# Create PostgreSQL init script
sudo mkdir -p /volume1/codermana/postgres
sudo nano /volume1/codermana/postgres/init.sql
# Paste the init.sql content from artifact
```

#### 2.4 Create Docker Compose File
```bash
sudo mkdir -p /volume1/docker/codermana
sudo nano /volume1/docker/codermana/docker-compose.yml
# Paste the docker-compose.yml content from artifact

# IMPORTANT: Change all passwords!
# - POSTGRES_PASSWORD
# - GITEA database password
# - LISTMONK database password
# - REMARK42 SECRET
```

#### 2.5 Create Environment File
```bash
sudo nano /volume1/docker/codermana/.env

# Add this (change the token after Gitea setup):
GITEA_RUNNER_TOKEN=your-token-here
```

#### 2.6 Start Services
```bash
cd /volume1/docker/codermana

# Start everything except runner (we need to get token from Gitea first)
sudo docker-compose up -d postgres gitea nginx owncast listmonk remark42 watchtower

# Check status
sudo docker-compose ps

# View logs
sudo docker-compose logs -f
```

---

### Phase 3: Raspberry Pi Setup (20 minutes)

#### 3.1 Flash Raspberry Pi OS
1. Download Raspberry Pi Imager
2. Flash Raspberry Pi OS Lite (64-bit)
3. Enable SSH in settings before flashing
4. Set hostname: `codermana-gateway`

#### 3.2 Initial Setup
```bash
# SSH into Raspberry Pi
ssh pi@raspberrypi.local  # Default password: raspberry

# Change password
passwd

# Update system
sudo apt update && sudo apt upgrade -y
```

#### 3.3 Run Setup Script
```bash
# Download and run setup script
curl -O https://your-temp-location/rpi-setup.sh
chmod +x rpi-setup.sh
sudo ./rpi-setup.sh

# Follow prompts:
# - Enter DuckDNS subdomain: codermana
# - Enter DuckDNS token: (from duckdns.org)
# - Enter Synology NAS IP: 192.168.1.xxx
```

#### 3.4 Configure Router Port Forwarding
In your router admin panel:

| External Port | Internal IP | Internal Port | Protocol |
|--------------|-------------|---------------|----------|
| 80 | RPi IP | 80 | TCP |
| 443 | RPi IP | 443 | TCP |
| 1935 | NAS IP | 1935 | TCP |

**Find RPi IP:**
```bash
hostname -I
```

---

### Phase 4: Gitea Configuration (15 minutes)

#### 4.1 Initial Setup
1. Open browser: `http://nas-ip:3000`
2. Complete initial configuration:
   - Database: PostgreSQL
   - Host: `postgres:5432`
   - Database: `gitea`
   - User: `gitea`
   - Password: (from docker-compose.yml)
   - Site title: "CoderMana Git"
   - Root URL: `https://git.codermana.com`
   - SSH Port: `2222`

3. Create admin account

#### 4.2 Enable Gitea Actions
1. Login as admin
2. Site Administration → Configuration
3. Scroll to "Actions" section
4. Verify `ENABLED=true`

#### 4.3 Register Actions Runner
```bash
# SSH into Synology
ssh admin@nas-ip

# Get runner token
sudo docker exec -it codermana-gitea gitea actions generate-runner-token

# Copy the token, add to .env file
sudo nano /volume1/docker/codermana/.env
# Update: GITEA_RUNNER_TOKEN=your-actual-token

# Start the runner
cd /volume1/docker/codermana
sudo docker-compose up -d gitea-runner

# Verify runner is registered
# Go to Gitea web UI → Site Admin → Actions → Runners
```

---

### Phase 5: Create and Deploy Site (20 minutes)

#### 5.1 Create Astro Project
On your laptop:
```bash
# Run the Astro setup script from earlier artifact
./setup-astro.sh

cd codermana-hour
npm install
npm run dev
# Test at http://localhost:4321
```

#### 5.2 Initialize Git Repository
```bash
cd codermana-hour

# Create .gitea directory for workflows
mkdir -p .gitea/workflows
nano .gitea/workflows/deploy.yml
# Paste the Gitea Actions workflow from artifact

# Initialize git
git init
git add .
git commit -m "Initial commit"
```

#### 5.3 Push to Gitea
```bash
# Add Gitea remote
git remote add origin http://nas-ip:3000/yourusername/codermana-hour.git

# Or if using SSH (port 2222):
git remote add origin ssh://git@nas-ip:2222/yourusername/codermana-hour.git

# Push
git push -u origin main
```

#### 5.4 Verify CI/CD
1. Go to Gitea → Repository → Actions
2. You should see the workflow running
3. Check logs for build progress
4. Site should be deployed to `/volume1/codermana/web/`

---

### Phase 6: Configure Services

#### 6.1 Listmonk Setup
1. Open: `http://nas-ip:9000`
2. Login with credentials from config.toml
3. Complete setup wizard
4. Configure SMTP:
   - Gmail: Use app-specific password
   - Or SendGrid: Free tier (100 emails/day)
   - Or Mailgun: Free tier (5,000/month)

#### 6.2 Owncast Setup
1. Open: `http://nas-ip:8081/admin`
2. Complete initial setup
3. Set stream key (save for OBS)
4. Configure:
   - Video bitrate: 3500 kbps
   - Audio bitrate: 160 kbps
   - Server name: "The CoderMana Hour"
   - Server URL: `https://thehour.codermana.com`

#### 6.3 Remark42 (Comments)
Already configured in docker-compose.yml. It will be available at:
`https://thehour.codermana.com/comments/`

---

## Workflow: Adding New Session

### 1. Create Session File
```bash
cd codermana-hour

# Create new session
cat > src/content/sessions/2025-02-06-llm-fundamentals.md << 'EOF'
---
title: "LLM Fundamentals: How Transformers Work"
description: "Understanding transformer architecture and attention mechanisms"
date: 2025-02-06
time: "7:00 PM IST"
status: "upcoming"
topics:
  - "Transformers"
  - "Attention Mechanism"
  - "GPT Architecture"
---

Deep dive into how large language models work...
EOF
```

### 2. Test Locally
```bash
npm run dev
# Visit http://localhost:4321
```

### 3. Deploy
```bash
git add .
git commit -m "Add LLM fundamentals session"
git push origin main
```

**That's it!** Gitea Actions automatically:
1. Detects the push
2. Runs the build
3. Deploys to `/volume1/codermana/web/`
4. Site is live at `https://thehour.codermana.com`

---

## Session Workflow

### Before Session (2 days prior)

1. **Create session content**
   ```bash
   # Already done above when creating the session file
   ```

2. **Send newsletter**
   - Login to Listmonk: `http://nas-ip:9000`
   - Create new campaign
   - Write in markdown
   - Send to subscribers

### During Session

1. **Start OBS**
   - Settings → Stream
   - Service: Custom
   - Server: `rtmp://thehour.codermana.com/live`
   - Stream Key: (from Owncast)

2. **Go Live**
   - Click "Start Streaming" in OBS
   - Viewers watch at: `https://thehour.codermana.com/live/`

3. **Record Locally**
   - OBS Settings → Output → Recording
   - Format: MP4
   - Quality: High

### After Session

1. **Stop streaming**

2. **Upload recording**
   ```bash
   # Upload to YouTube
   youtube-upload --title="LLM Fundamentals" recording.mp4

   # Upload to Odysee (use Odysee Sync or manual)
   ```

3. **Update session status**
   ```bash
   # Edit session file
   nano src/content/sessions/2025-02-06-llm-fundamentals.md

   # Change:
   status: "upcoming" → status: "recorded"
   # Add:
   youtube_video: "VIDEO_ID_HERE"

   # Commit and push
   git add .
   git commit -m "Update session with recording"
   git push
   ```

4. **Send follow-up email**
   - Listmonk: Create campaign
   - Include recording link, resources, Q&A

---

## Maintenance

### Daily
- Nothing! System runs automatically

### Weekly
- Check Docker logs: `docker-compose logs --tail=50`
- Check disk space: `df -h`

### Monthly
- Renew DuckDNS (automatic via cron)
- SSL renewal (automatic via certbot)
- Update containers (automatic via watchtower)

### Manual Updates (if needed)
```bash
cd /volume1/docker/codermana
sudo docker-compose pull
sudo docker-compose up -d
```

---

## Backup Strategy

### What to Backup
1. `/volume1/codermana/db` - PostgreSQL databases
2. `/volume1/codermana/gitea` - Git repositories
3. `/volume1/codermana/listmonk` - Mailing list data
4. `/volume1/codermana/remark42` - Comments

### Synology Hyper Backup
1. Control Panel → Update & Restore
2. Backup Destination: External USB drive
3. Schedule: Daily at 3 AM
4. Backup: `/volume1/codermana/`

### Git Repository
Your Astro site is already backed up in Gitea!

Additional remote backup:
```bash
# Add USB drive as backup remote
git remote add backup /mnt/usb/codermana-hour.git
git push backup main
```

---

## Monitoring

### Simple Health Check Script (Optional)
On Raspberry Pi:

```bash
cat > ~/health-check.sh << 'EOF'
#!/bin/bash
# Simple health check

SITE="https://thehour.codermana.com"

if curl -f -s -o /dev/null "$SITE"; then
    echo "✅ Site is UP"
else
    echo "❌ Site is DOWN!"
    # Optional: Send notification
fi
EOF

chmod +x ~/health-check.sh

# Add to cron (every 5 minutes)
crontab -e
# Add: */5 * * * * ~/health-check.sh >> ~/health-check.log
```

---

## Troubleshooting

### Site not accessible from internet
1. Check DuckDNS is updating:
   ```bash
   cat ~/duckdns-last-update.log
   ```
2. Check router port forwarding
3. Check Nginx is running on RPi:
   ```bash
   sudo systemctl status nginx
   ```

### CI/CD not running
1. Check Gitea runner status:
   ```bash
   sudo docker logs codermana-gitea-runner
   ```
2. Check runner is registered in Gitea UI
3. Verify workflow file is in `.gitea/workflows/`

### Build fails
1. Check Gitea Actions logs in web UI
2. Test build locally:
   ```bash
   npm run build
   ```
3. Check disk space on NAS:
   ```bash
   df -h /volume1
   ```

### SSL certificate issues
1. Check certbot:
   ```bash
   sudo certbot certificates
   ```
2. Renew manually:
   ```bash
   sudo certbot renew --force-renewal
   ```

---

## Cost Breakdown

### Monthly Costs
| Item | Cost |
|------|------|
| Synology NAS electricity (~10W) | ~$2.50 |
| Raspberry Pi electricity (~2.5W) | ~$0.50 |
| Internet | $0 (already paying) |
| Domain (codermana.com) | ~$12/year = $1/mo |
| **Total** | **~$4/month** |

### One-time Costs
| Item | Cost |
|------|------|
| Already own Synology NAS | $0 |
| Already own Raspberry Pi 3 | $0 |
| Already own domain | $0 |
| **Total** | **$0** |

### Services Used (All Free/OSS)
- ✅ Gitea (OSS Git + CI/CD)
- ✅ DuckDNS (Free DDNS)
- ✅ Let's Encrypt (Free SSL)
- ✅ Owncast (OSS Streaming)
- ✅ Listmonk (OSS Newsletter)
- ✅ Remark42 (OSS Comments)
- ✅ Astro (OSS SSG)
- ✅ PostgreSQL (OSS Database)
- ✅ Nginx (OSS Web Server)

**Zero proprietary services. Complete privacy. Total control.**

---

## Advantages of This Setup

✅ **Complete Privacy** - No cloud dependencies
✅ **Zero Vendor Lock-in** - All OSS, can migrate anytime
✅ **Low Cost** - ~$4/month (just electricity)
✅ **Full Control** - You own all data
✅ **Fast CI/CD** - Builds on local network
✅ **Reliable** - No external service dependencies
✅ **Scalable** - Can handle hundreds of concurrent viewers

---

## Next Steps

1. ✅ Setup Synology NAS with Docker containers
2. ✅ Setup Raspberry Pi as gateway
3. ✅ Configure DNS (DuckDNS + domain CNAME)
4. ✅ Get SSL certificate (Let's Encrypt)
5. ✅ Setup Gitea and enable Actions
6. ✅ Deploy Astro site
7. ✅ Configure Listmonk
8. ✅ Configure Owncast
9. 🎬 Test stream with OBS
10. 📧 Send first newsletter
11. 🚀 Schedule first session!

---

## Support & Resources

- **Gitea Docs**: https://docs.gitea.io
- **Gitea Actions**: https://docs.gitea.io/en-us/usage/actions/overview/
- **Owncast Docs**: https://owncast.online/docs/
- **Listmonk Docs**: https://listmonk.app/docs/
- **DuckDNS**: https://www.duckdns.org/spec.jsp
- **Astro Docs**: https://docs.astro.build

---

**Your setup is now complete! Everything runs locally, privately, with full control. Enjoy!** 🎉
