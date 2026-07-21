import urllib.request
import re

url = "https://docs.google.com/forms/d/e/1FAIpQLSdk6sZtR3D9WEqknpSOKANA-DxMfnszfjWW8VjwO4QopDwIOA/viewform"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

# Find form action
action_match = re.search(r'<form action="([^"]+)"', html)
if action_match:
    print(f"Action: {action_match.group(1)}")

# Find all data-params which contain field names and IDs
# Pattern: [1234567,"Field Name",...
import json
data_params = re.findall(r'data-params="([^"]+)"', html)
for dp in data_params:
    dp = dp.replace('&quot;', '"')
    try:
        arr = json.loads(dp)
        # Usually arr is [[id, "Name", ...]]
        # Wait, the structure is complex. Let's just regex for the titles and their IDs.
    except:
        pass

# A simpler way to get field names and entry IDs:
# Google forms stores fields in a script tag with FB_PUBLIC_LOAD_DATA_
script_match = re.search(r'var FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);', html)
if script_match:
    data = json.loads(script_match.group(1))
    # data[1][1] contains the items
    for item in data[1][1]:
        # item[1] is the title
        title = item[1]
        # item[4] contains the form components, item[4][0][0] is the entry ID
        if len(item) > 4 and item[4]:
            try:
                entry_id = item[4][0][0]
                print(f"Title: {title} -> entry.{entry_id}")
            except:
                pass
