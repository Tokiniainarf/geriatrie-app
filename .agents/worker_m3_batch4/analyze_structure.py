import re
import os

def analyze_structure(ch):
    filepath = r"C:\Users\tokin\.gemini\antigravity\scratch\geriatrie-app\.agents\worker_m3_batch4\{}_text.txt".format(ch)
    if not os.path.exists(filepath):
        return f"{ch} text file not found"
    
    with open(filepath, "r", encoding="utf-8", errors="ignore") as f:
        lines = f.readlines()
    
    headings = []
    for line in lines:
        stripped = line.strip()
        # Find lines starting with roman numerals (I., II., etc.), capital letters (A., B., etc.), or arabic numerals (1., 2., etc.)
        if re.match(r'^(I|V|X|L|C|D|M)+\.\s', stripped) or re.match(r'^[A-Z]\.\s', stripped) or re.match(r'^\d+\.\s', stripped):
            headings.append(stripped)
    
    return headings

out_lines = []
for ch in ["ch13", "ch14", "ch15", "ch16"]:
    out_lines.append(f"\n=== Structure of {ch} ===")
    headings = analyze_structure(ch)
    out_lines.append(f"Found {len(headings)} headings:")
    out_lines.extend(headings[:50]) # limit to 50

with open("chapters_structure.txt", "w", encoding="utf-8") as f_out:
    f_out.write("\n".join(out_lines))
print("Wrote structure to chapters_structure.txt")
