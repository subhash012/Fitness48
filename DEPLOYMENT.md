# Fitness 48 Deployment Guide

## 1. Push to GitHub

This repository is committed locally. To push it to your GitHub account, first create an empty repository under your account, for example `fitness48`.

Then run:

```bash
git remote add origin https://github.com/subhash012/fitness48.git
git branch -M main
git push -u origin main
```

If you use a different repository name, replace `fitness48` in the URL.

## 2. Create the Azure VM

1. Sign in to the Azure Portal.
2. Create a new resource group, for example `rg-fitness48`.
3. Create a new virtual machine.
4. Use these suggested settings:
   - Image: Ubuntu Server 22.04 LTS
   - Size: Standard B2s or higher
   - Authentication: SSH public key
   - Inbound ports: SSH (22), HTTP (80), HTTPS (443)
5. Create or upload an SSH key pair.
6. Finish VM creation and note the public IP address.

## 3. Connect to the VM

From your local machine:

```bash
ssh azureuser@YOUR_VM_PUBLIC_IP
```

## 4. Install server dependencies

On the VM, run:

```bash
sudo apt update
sudo apt install -y git curl nginx build-essential postgresql postgresql-contrib
```

Install Node.js 20 LTS:

```bash
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs
node -v
npm -v
```

Install PM2:

```bash
sudo npm install -g pm2
```

## 5. Set up PostgreSQL on the VM

If you want the database on the same VM:

```bash
sudo -u postgres psql
```

Inside `psql`:

```sql
CREATE DATABASE fitness48;
CREATE USER fitness48_user WITH ENCRYPTED PASSWORD 'strong-password';
GRANT ALL PRIVILEGES ON DATABASE fitness48 TO fitness48_user;
\q
```

Your `DATABASE_URL` will look like:

```bash
postgresql://fitness48_user:strong-password@localhost:5432/fitness48
```

## 6. Clone the repository

```bash
git clone https://github.com/subhash012/fitness48.git
cd fitness48
```

If the repo is private, use SSH or a GitHub token.

## 7. Configure environment variables

Create `.env` on the VM:

```bash
cp .env.example .env
nano .env
```

Set:

```bash
DATABASE_URL="postgresql://fitness48_user:strong-password@localhost:5432/fitness48"
NEXT_PUBLIC_SITE_URL="http://YOUR_VM_PUBLIC_IP"
NEXT_PUBLIC_GMAPS_EMBED_URL="https://maps.app.goo.gl/pDz77Fu2obpjxJvn9"
ADMIN_SECRET="your-strong-admin-secret"
NEXT_PUBLIC_WHATSAPP_NUMBER="9178921917112"
NEXT_PUBLIC_PHONE_NUMBER="+9178921917112"
```

## 8. Build the app

```bash
npm install
npx prisma generate
npx prisma migrate deploy
npm run build
```

## 9. Run the app with PM2

```bash
pm2 start npm --name fitness48 -- start
pm2 save
pm2 startup
```

The app will run on port 3000.

## 10. Configure Nginx reverse proxy

Create a site config:

```bash
sudo nano /etc/nginx/sites-available/fitness48
```

Use:

```nginx
server {
    listen 80;
    server_name YOUR_DOMAIN_OR_VM_PUBLIC_IP;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/fitness48 /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## 11. Add HTTPS

If you have a domain pointed to the VM:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

## 12. Point your domain to Azure

In your DNS provider:

1. Create an A record pointing your domain to the VM public IP.
2. Wait for DNS propagation.
3. Re-run Certbot if needed.

## 13. Optional: keep the Express server

The Next.js app already handles the form APIs, so the Express backend is optional.

If you still want it:

```bash
pm2 start npm --name fitness48-backend -- run dev:server
pm2 save
```

## 14. Update after code changes

When you deploy a new commit:

```bash
git pull
npm install
npx prisma generate
npx prisma migrate deploy
npm run build
pm2 restart fitness48
```
