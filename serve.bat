@echo off
echo.
echo ========================================
echo   Geriatrie 5e ed. - Serveur local
echo   Ouvrez http://localhost:8080
echo   Ctrl+C pour arreter
echo ========================================
echo.
cd /d "%~dp0"
python -m http.server 8080
