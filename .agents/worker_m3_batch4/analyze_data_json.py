import json
import re

# Read data.js but remove the "const APP_DATA = " prefix and trailing semicolon if any
with open(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\data.js", "r", encoding="utf-8") as f:
    text = f.read()

# Strip "const APP_DATA = " and trailing semicolon
# We can find where the first { is and where the last } is.
start_idx = text.find("{")
end_idx = text.rfind("}")
json_str = text[start_idx:end_idx+1]

try:
    data = json.loads(json_str)
    print("Parsed JSON successfully!")
    print("Keys in data:", data.keys())
    print("Keys in data['content']:", data["content"].keys())
    for ch in ["ch13", "ch14", "ch15", "ch16"]:
        if ch in data["content"]:
            ch_data = data["content"][ch]
            print(f"{ch}: type {type(ch_data)}, length {len(ch_data)}")
            if len(ch_data) > 0:
                print(f"  First item preview: {repr(ch_data[0][:2])}")
        else:
            print(f"{ch} NOT found in content")
except Exception as e:
    print("Failed to parse JSON:", str(e))
    # Fallback to search if JSON parsing failed
