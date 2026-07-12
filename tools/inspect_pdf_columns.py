import collections
import os
import sys

import pdfplumber


PDF_PATH = r"C:\Users\tokin\Desktop\GERIARTRIE\Gériatrie 5e éd❤️.pdf"


def grouped_lines(words, top_min=45, top_max=None, tolerance=2.2):
    if top_max is None:
        top_max = float(os.environ.get("PDF_TOP_MAX", "800"))
    groups = []
    for word in sorted(words, key=lambda item: (item["top"], item["x0"])):
        if word["top"] < top_min or word["top"] > top_max:
            continue
        for group in groups:
            if abs(group[0]["top"] - word["top"]) < tolerance:
                group.append(word)
                break
        else:
            groups.append([word])
    return sorted(groups, key=lambda group: group[0]["top"])


with pdfplumber.open(PDF_PATH) as pdf:
    pages = [int(arg) for arg in sys.argv[1:]] or [331, 334, 353, 361, 376]
    print("pages", len(pdf.pages))
    for page_number in pages:
        page = pdf.pages[page_number - 1]
        words = page.extract_words(x_tolerance=2, y_tolerance=2, keep_blank_chars=False)
        bins = collections.Counter(int(word["x0"] // 25) * 25 for word in words)
        print("PAGE", page_number, "size", page.width, page.height, "words", len(words))
        print("x0bins", bins.most_common(15))
        for group in grouped_lines(words):
            group.sort(key=lambda item: item["x0"])
            text = " ".join(item["text"] for item in group)
            print(f"{group[0]['top']:6.1f} {group[0]['x0']:6.1f}-{group[-1]['x1']:6.1f} | {text}")
        print()
