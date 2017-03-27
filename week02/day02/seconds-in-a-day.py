current_hours = 14
current_minutes = 34
current_seconds = 42

day_sec = 60*60*24

current_time_sec = current_hours*(60**2)+current_minutes*60+current_seconds
remain_sec = day_sec - current_time_sec

print (current_time_sec)
print (remain_sec)
