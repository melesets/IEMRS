@echo off
timeout /t 15 /nobreak > nul
cd /d "C:\App file\IEMRS\server"
pm2 resurrect
timeout /t 5 /nobreak > nul
net stop nginx >nul 2>&1
net start nginx >nul 2>&1
