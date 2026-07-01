import pathlib
p = pathlib.Path('C:/Users/tokin/geriatrie-app/app.js')
lines = p.read_text(encoding='utf-8').splitlines()

insert = [
    "  // Strip standalone copyright / publisher lines",
    "  text = text.replace(/\\n\\s*©\\s+\\d{4}[^\\n]*Elsevier[^\\n]*\\n/g, '\\n');",
    "  text = text.replace(/\\n\\s*Tous\\s+droits\\s+réservés[^\\n]*\\n/g, '\\n');",
    "  text = text.replace(/\\n\\s*Gériatrie\\s*\\n/g, '\\n');",
    "  text = text.replace(/\\n\\s*This page intentionally left blank\\s*\\n/g, '\\n');",
]

for i, l in enumerate(lines):
    if l.strip() == 'return m;':
        # insert after this and its closing brace
        for j in range(i+1, min(i+5, len(lines))):
            if lines[j].strip() == '});':
                lines = lines[:j+1] + insert + lines[j+1:]
                break
        break

sep = '\r\n' if p.read_bytes().count(b'\r\n') > 0 else '\n'
p.write_text(sep.join(lines), encoding='utf-8')
print('inserted')
