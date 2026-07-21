import urllib.request
import re
import json

url = "https://docs.google.com/forms/d/e/1FAIpQLSdk6sZtR3D9WEqknpSOKANA-DxMfnszfjWW8VjwO4QopDwIOA/viewform"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

script_match = re.search(r'var FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);', html)
if script_match:
    data = json.loads(script_match.group(1))
    for item in data[1][1]:
        title = item[1]
        if len(item) > 4 and item[4]:
            try:
                entry_id = item[4][0][0]
                options = []
                if len(item[4][0]) > 1 and item[4][0][1]:
                    for opt in item[4][0][1]:
                        options.append(opt[0])
                print(f"Title: {title} -> entry.{entry_id}, Options: {options}")
            except Exception as e:
                pass
