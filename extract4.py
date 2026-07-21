import urllib.request
import re

url = "https://docs.google.com/forms/d/e/1FAIpQLSdk6sZtR3D9WEqknpSOKANA-DxMfnszfjWW8VjwO4QopDwIOA/viewform"
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

for match in re.finditer(r'name="(entry\.[^"]+)"', html):
    print(match.group(1))
