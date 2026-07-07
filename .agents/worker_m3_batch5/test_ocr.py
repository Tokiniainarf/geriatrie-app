import subprocess

try:
    res = subprocess.run(["tesseract", "--version"], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    print("Tesseract version:", res.stdout)
except Exception as e:
    print("Tesseract not found or error:", e)
