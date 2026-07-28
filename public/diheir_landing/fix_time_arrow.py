html_path = "/Users/apple/Desktop/diheir_landing/diheir_landing.html"
with open(html_path, "r") as f:
    html = f.read()

old_time_picker = """<select required id="diheir-time-picker" class="border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-[110px] md:w-[130px] shrink-0 pb-2 text-[15px] md:text-[16px] focus:border-[#444429] cursor-pointer appearance-none">"""
new_time_picker = """<select required id="diheir-time-picker" class="border-b border-[#444429]/40 bg-transparent text-[#444429] outline-none w-[110px] md:w-[130px] shrink-0 pb-2 text-[15px] md:text-[16px] focus:border-[#444429] cursor-pointer bg-no-repeat bg-right" style="background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2212%22%20height%3D%2212%22%20fill%3D%22%23444429%22%20viewBox%3D%220%200%2016%2016%22%3E%3Cpath%20d%3D%22M7.247%2011.14L2.451%205.658C1.885%205.013%202.345%204%203.204%204h9.592a1%201%200%200%201%20.753%201.659l-4.796%205.48a1%201%200%200%201-1.506%200z%22%2F%3E%3C%2Fsvg%3E'); background-position-y: 6px; appearance: none; -webkit-appearance: none;">"""

html = html.replace(old_time_picker, new_time_picker)

with open(html_path, "w") as f:
    f.write(html)
print("Fixed time arrow.")
