#!/bin/bash

# Variabel untuk konfigurasi
REPO_URL="git@github.com:mensafri/vestrado-web-v2.git" # Ganti dengan repository Anda
APP_DIR=~/myapp
NEW_APP_DIR=~/myapp_new
OLD_APP_DIR=~/myapp_old

# Step 1: Pull atau Clone Repository
if [ -d "$APP_DIR" ]; then
  echo "Creating a new directory for deployment..."
  rm -rf $NEW_APP_DIR
  cp -r $APP_DIR $NEW_APP_DIR
  cd $NEW_APP_DIR
  git pull origin master
else
  echo "Cloning repository from $REPO_URL..."
  git clone $REPO_URL $NEW_APP_DIR
  cd $NEW_APP_DIR
fi

# Step 2: Build dan Start Docker Container Baru
echo "Building and starting the new Docker containers..."
sudo docker-compose -f docker-compose.yml -p new_app up --build -d

# Step 3: Tunggu Health Check
echo "Waiting for health check..."
sleep 10  # Beri waktu untuk inisialisasi awal
if ! sudo docker-compose -f docker-compose.yml -p new_app ps | grep "(healthy)"; then
  echo "Health check failed. Rolling back to previous version."
  sudo docker-compose -f docker-compose.yml -p new_app down
  exit 1
fi

# Step 4: Swap Aplikasi Lama dan Baru
echo "Swapping old and new versions..."
mv $APP_DIR $OLD_APP_DIR
mv $NEW_APP_DIR $APP_DIR

# Step 5: Stop dan Hapus Container Lama
echo "Stopping and removing old containers..."
cd $OLD_APP_DIR
sudo docker-compose -f docker-compose.yml -p old_app down

# Step 6: Bersihkan Direktori Lama
echo "Cleaning up..."
rm -rf $OLD_APP_DIR

# Final Message
echo "Deployment complete. Your application is updated with zero downtime."
