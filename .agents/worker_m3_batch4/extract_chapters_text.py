import json
import os

with open(r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\data.js", "r", encoding="utf-8") as f:
    text = f.read()

start_idx = text.find("{")
end_idx = text.rfind("}")
json_str = text[start_idx:end_idx+1]
data = json.loads(json_str)

for ch in ["ch13", "ch14", "ch15", "ch16"]:
    ch_data = data["content"][ch]
    # ch_data is a list of [page_num, text]
    ch_text = []
    for item in ch_data:
        page_num = item[0]
        text_content = item[1]
        ch_text.append(f"--- Page {page_num} ---\n{text_content}\n")
    
    out_path = f"C:\\Users\\tokin\\.gemini\\antigravity\\scratch\\geriatrie-app\\.agents\\worker_m3_batch4\\{ch}_text.txt"
    with open(out_path, "w", encoding="utf-8") as f_out:
        f_out.write("\n".join(ch_text))
    print(f"Extracted {ch} to {out_path}")
