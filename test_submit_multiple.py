import urllib.request
import urllib.parse

url = "https://docs.google.com/forms/d/e/1FAIpQLSdk6sZtR3D9WEqknpSOKANA-DxMfnszfjWW8VjwO4QopDwIOA/formResponse"

# Simulate hidden input + checked checkbox
data = [
    ("entry.1054060175", "테스트이름"),
    ("entry.2074802535", "010-1234-5678"),
    ("entry.626727524_year", "2026"),
    ("entry.626727524_month", "07"),
    ("entry.626727524_day", "20"),
    ("entry.134182212", "test@test.com"),
    ("entry.399277218", "테스트요청사항"),
    ("entry.831169210", "네"),
    ("entry.430492874", "아니오"), # Hidden
    ("entry.430492874", "네")      # Checkbox checked
]

data_encoded = urllib.parse.urlencode(data).encode('utf-8')

req = urllib.request.Request(url, data=data_encoded)
req.add_header('Content-Type', 'application/x-www-form-urlencoded')
req.add_header('User-Agent', 'Mozilla/5.0')

try:
    response = urllib.request.urlopen(req)
    html = response.read().decode('utf-8')
    if "응답이 기록되었습니다" in html or "Your response has been recorded" in html or "응답이 저장되었습니다" in html:
        print("SUCCESS")
    else:
        print("FAILED (Might have returned HTML with error)")
except urllib.error.HTTPError as e:
    print(f"HTTP Error: {e.code}")
